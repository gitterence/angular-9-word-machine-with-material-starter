import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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
        var currentStack = stack.join();
        console.log('input:', curr, ' output:', currentStack);
      } else {
        // check if the operation command is valid
        if (curr == 'POP' || curr == 'DUP' || curr == '+' || curr == '-') {
          // process operation
          switch (curr) {
            case 'POP':
              if (stack.length > 0) {
                stack.pop();
                var currentStack = stack.join();
                console.log('input:', curr, ' output:', currentStack);
              } else {
                this.error = true;
                return 'error';
              }
              break;

            case 'DUP':
              if (stack.length > 0) {
                let last = stack[stack.length - 1];
                console.log(last);
                stack.push(last);
                //console output
                var currentStack = stack.join();
                console.log('input:', curr, ' output:', currentStack);
              } else {
                this.error = true;
                return 'error';
              }
              break;

            case '+':
              if (stack.length >= 2) {
                let lastOne = stack.pop();
                let lastSecond = stack.pop();
                let element = lastOne + lastSecond;
                stack.push(element);
                //console output
                var currentStack = stack.join();
                console.log('input:', curr, ' output:', currentStack);
              } else {
                this.error = true;
                return 'error';
              }
              break;

            case '-':
              if (stack.length >= 2) {
                let lastOne = stack.pop();
                let lastSecond = stack.pop();
                let element = lastSecond - lastOne;
                stack.push(element);
                //console output
                var currentStack = stack.join();
                console.log('input:', curr, ' output:', currentStack);
              } else {
                this.error = true;
                return 'error';
              }
              break;
          }
        } else {
          this.error = true;
          return 'error';
        }
      }
    }

    if (stack.length === 0) {
      res = 'stack is empty';
    }

    if (stack.length > 0) {
      res = stack[stack.length - 1];
    }

    return res;
  }

  private isNumber(n: string): boolean {
    var a = Number(n);
    return !isNaN(parseFloat(n)) && !isNaN(a - 0);
  }
}
