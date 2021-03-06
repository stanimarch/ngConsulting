import { ExistingProvider, FactoryProvider, InjectionToken, NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { UserResolverService } from './user-resolver.service';
import { HttpClientModule } from '@angular/common/http';
import { UserGuard } from './user.guard';

export const MSG_TOKEN: InjectionToken<string> = new InjectionToken<string>( 'msgToken' );

@NgModule({
  imports: [
    CommonModule, RouterModule,
    HttpClientModule
  ],
  declarations: [UsersComponent, UserComponent, UserDetailComponent],
  exports: [UsersComponent, UserComponent, UserDetailComponent],
  providers: [
    UserService,
    UserResolverService,
    <ValueProvider>{ provide: MSG_TOKEN, useValue: 'msg AG'},
    <ValueProvider>{ provide: 'endpointProtocol', useValue: 'http'},
    <ValueProvider>{ provide: 'endpointUrl', useValue: 'netTrek.de'},
    <ValueProvider>{ provide: 'netTrek', useValue: 'netTrek GmbH'},
    <ExistingProvider>{ provide: 'companies', useExisting: MSG_TOKEN, multi: true },
    <ExistingProvider>{ provide: 'companies', useExisting: 'netTrek', multi: true },
    <FactoryProvider>{ provide: 'endpoint', useFactory: ( protocol: string, url: string ) => {
    return `${protocol}://${url}`;
    }, deps: ['endpointProtocol', 'endpointUrl']},
    UserGuard
  ]
})
export class UsersModule { }
