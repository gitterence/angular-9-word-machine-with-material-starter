import { Component } from '@angular/core';

@Component({
  selector: 'word-machine',
  templateUrl: './word-machine.component.html',
  styleUrls: ['./word-machine.component.scss']
})
export class WordMachineComponent {
  instruction: string;
  isLoading: boolean;
  showResult: boolean;

  commands: string;
  commandArray: string[];

  constructor() {
    this.isLoading = false;
    this.showResult = false;

    this.instruction =
      'Please enter your commands below and click send to see result.';

    this.commands = '';
    this.commandArray = [];
  }

  public processCommands(): void {
    this.commandArray = this.commands.split(' ');
    this.showResult = true;
    this.commands = '';
  }
}
