import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.scss']
})

export class RemoveBookComponent implements OnInit {

  
  constructor(
    public dialogRef: MatDialogRef<RemoveBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();  
  }


  ngOnInit() {
  }

}
