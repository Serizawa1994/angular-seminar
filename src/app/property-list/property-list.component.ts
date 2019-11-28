import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxExcelExporterService,
         IgxExcelExporterOptions } from "igniteui-angular";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  
  data = [];
  
  @ViewChild('grid', {static:false}) grid: IgxGridComponent;

  constructor(private excelExporterService : IgxExcelExporterService) { }

  ngOnInit() {
    
    for(let i = 1; i <= 1000; i++){
      this.data.push({
        propertyId: i,
        propertyName: `備品${i}`,
        isUsed: i%3 === 0 ? false : true,
        purchaseDate: new Date(2017,0,i),
      })
      
    }
  }
  
  formatBoolean(val:boolean):string{
    return val ? '●' : '';
  }
  
  formatDate(val:Date):string{
    return new Intl.DateTimeFormat('ja-JP').format(val);
  }
  
  exportExcel(){
    this.excelExporterService.export(this.grid, new IgxExcelExporterOptions('ExportedExcel'));
  }

}
