import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  //Verifica se o aparelho conectado é desktop ou móvel
  isHandset$: Observable<boolean> = this.breakPointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),

      //Possibilita multiplos subscribes, além de dar acesso a dados já transmitidos para subscribers atrasados
      shareReplay()
    );

  constructor(
    private breakPointObserver: BreakpointObserver,
  ) { }

}
