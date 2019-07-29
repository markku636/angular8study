export class EnumHelper {
    private constructor() {
    }

    static getSelect2List<T extends number>(e: any, isNeedAll: boolean = false, AllText: string = "All", AllValue: number = -1) {
        let select2List = []

        if (isNeedAll) {
            select2List.push({ text: AllText, value: AllValue, id: AllValue })
        }

        EnumHelper.getNames(e).forEach(n => (
            select2List.push({ text: n, value: e[n] as T, id: e[n] as T }
            )));

        return select2List;
    }

    static getNamesAndValues<T extends number>(e: any) {
        return EnumHelper.getNames(e).map(n => ({ name: n, value: e[n] as T }));
    }

    static getNames(e: any) {
        return Object.keys(e).filter(k => typeof e[k] === "number") as string[];
    }

    static getValues<T extends number>(e: any) {
        return Object.keys(e)
            .map(k => e[k])
            .filter(v => typeof v === "number") as T[];
    }
}

// import { Pipe, PipeTransform } from "@angular/core";
// import { DomSanitizer } from '@angular/platform-browser'; 

// @Pipe({ name: 'safeHtml' })
// export class SafeHtmlPipe implements PipeTransform {
//   constructor(private sanitized: DomSanitizer) { }
 
//   transform(value) {
//     return this.sanitized.bypassSecurityTrustHtml(value);
//   }
// }
