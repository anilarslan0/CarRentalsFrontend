import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/app/models/color';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
  colors: Color[] = [];
  filterText: string = '';
  constructor(private colorService: ColorService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  colorDelete(color:Color){
    this.colorService.colorDelete(color).subscribe(response=>{
      this.toastrService.info(response.message)
      window.location.reload();
    },responseError=>{
      this.toastrService.info(responseError.message)
    })
  }


}
