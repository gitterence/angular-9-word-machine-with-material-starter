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

  error: boolean;
  errorMessage: string;

  commands: string;
  commandArray: string[];

  output: string;

  constructor() {
    this.isLoading = false;
    this.showResult = false;
    this.error = false;

    this.instruction =
      'Please enter your commands below and click send to see result.';

    this.errorMessage =
      'Error occured. Please adjust your commands and click send again.';

    this.commands = '';
    this.commandArray = [];
  }

  public sendCommands(): void {
    this.error = false;
    this.isLoading = true;

    this.commandArray = this.commands.trim().split(' ');

    if (this.commandArray.length === 0) {
      this.error = true;
    } else {
      this.output = this.processCommands();
    }

    if (this.error) {
      this.showResult = false;
    } else {
      this.commands = '';
      this.showResult = true;
    }

    this.isLoading = false;
  }

  public processCommands(): string {
    let res: string = '';

    let stack = [];

    for (let i = 0; i < this.commandArray.length; i++) {
      var curr = this.commandArray[i];

      if (this.isNumber(curr)) {
        // push the number into the stack
        stack.push(Number(curr));
        console.log(stack);
      } else {
        // check if the operation is valid
        if (curr == 'POP' || curr == 'DUP' || curr == '+' || curr == '-') {
          // process operation
          switch (curr) {
            case 'POP':
              break;

            case 'DUP':
              break;

            case '+':
              break;

            case '-':
              break;
          }
        } else {
          this.error = true;
          return 'error';
        }
      }
    }
    res = stack.join();

    return res;
  }

  private isNumber(n: string): boolean {
    var a = Number(n);
    return !isNaN(parseFloat(n)) && !isNaN(a - 0);
  }
}
