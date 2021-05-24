import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', <--Selector cuando es un atributo de un div
  // selector: '.app-servers', <--Selector cuando es una clase css de un div
  selector: 'app-servers', // <--Selector normal
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No server can be created'
serverName = 'TestServer';
serverCreated = false;
servers = ['Testserver', 'Testserver 2'];
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
