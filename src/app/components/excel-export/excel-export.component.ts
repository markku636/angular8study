import { Component, OnInit } from '@angular/core';
// import { WorkBook, utils, writeFile, WorkSheet } from 'xlsx';
declare var XLSX : any; 




@Component({
  selector: 'app-excel-export',
  templateUrl: './excel-export.component.html',
  styleUrls: ['./excel-export.component.scss']
})
export class ExcelExportComponent implements OnInit {
  table = [
    {
      First: 'one',
      Second: 'two',
      Third: 'three',
      Forth: 'four',
      Fifth: 'five'
    },
    {
      First: 'un',
      Second: 'deux',
      Third: 'trois',
      Forth: 'quatre',
      Fifth: '99999999999999999999999999'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    const json = this.table;
    /* generate worksheet */
    // const ws: WorkSheet = utils.json_to_sheet(json);
    debugger;
    
    const ws = XLSX.utils.aoa_to_sheet(this.setupAoa(this.table));

    let a1 = ws['A1']; // 返回 { v:值 'hello', t型態: 's', ... } https://segmentfault.com/a/1190000018077543

    ws['A1'].v = 'sakura';
    ws['A1'].t = 's';
    /* generate workbook and add the worksheet */
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }
  private setupAoa(table) {
    var jsonArray = [];
    jsonArray.push(["This is a Ttile"]);
    jsonArray.push(["第一", "第二", "第三", "第四", "第五"]);

    for (var i = 0; i < this.table.length; i++) {
      jsonArray.push([this.table[i].First, this.table[i].Second, this.table[i].Third, this.table[i].Forth, this.table[i].Fifth]);
    }
    return jsonArray;
  }

  onClick2() {
    debugger
    var ele = document.getElementsByClassName('table')[0];

    var ws = XLSX.utils.table_to_sheet(ele);
    var wb = XLSX.utils.book_new();

  // 寬度
    var wscols = [
      {wch:6}, // 幾個字寬
      {wch:7}, 
      {wch:10},
      {wch:20}
  ];
     ws['!cols'] = wscols;

  // [          
  //   {
  //     hidden? : boolean, //列的显示true或隐藏false
  //     /* column width is specified in one of the following ways: */
  //     wpx? : number, // 列宽 单位是像素
  //     width? : number,  // width in Excel's "Max Digit Width", width*256 is integral
  //     wch? : number,  // width in characters
  //     /* other fields for preserving features from files */
  //     MDW? : number,  // Excel's "Max Digit Width" unit, always integral
  //   }
  // ]

     const borderAll = {  //单元格外侧框线
      top: {
        style: 'thin'
      },
      bottom: {
        style: 'thin'
      },
      left: {
        style: 'thin'
      },
      right: {
        style: 'thin'
      }
    };


    // 寫入值及型態
    ws['A1'] = {
      v: '采购单',
      t: 's',
      s: {
        font: {
          sz: 18,                //18号字体
          bold: true             //加粗
        },
        alignment: {
          horizontal: 'center'   //水平居中对其
        },
        border:borderAll,
        fill : {
          fgColor : {
              theme : 8,
              tint : 0.3999755851924192,
              rgb : '08CB26'
          }
        }
      }
    }
    // 不能改樣式 及border 
    // utils.cell_add_comment(ws['A1'],"aaa")
    ws['D4'] = { t: 'n', v: 9999999999 }
    
    ws['A99'] = { t: 'n', v: 9999999999 } 

    var range = XLSX.utils.decode_range(ws["!ref"]); // 索引從0開始


    // 調整range 方式1(匯出會依據Range)
    //ws["!ref"] = "A1:H99" //

    
    // 調整range 方式2(匯出會依據Range)
    // var range = utils.decode_range(ws["!ref"]); // 索引從0開始
    //  /* remove the last row */
    // range.e.r++;
    // /* remove the last column */
    // range.e.c++;

    // /* reencode the range */
    // ws["!ref"] = utils.encode_range(range);  
    
    // 註解
    if(!ws.A2.c) ws.A2.c = [];    
    ws.A2.c.hidden = true; // 需要hidden 不然會一大塊擋在上面
    ws.A2.c.push({a:"SheetJS", t:"This comment will be hidden"});
    
    
    // 合併儲存格
    // const merge = [
    //   { s: { r: 1, c: 0 }, e: { r: 2, c: 0 } },{ s: { r: 3, c: 0 }, e: { r: 4, c: 0 } },
    // ];
    // ws["!merges"] = merge;
    
    

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');




    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }

}
