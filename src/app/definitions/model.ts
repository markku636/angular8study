export class ResultModel {
    valid: boolean;
    status: string;
    message: string;
    data: any;
}

export class LoginModel {
    usercode: string;
    password: string;
}

export class UserModel {
    userId: number;
    userCode: string;
    name: string;
    password: string;
    confirmPassword: string;
    email: string;
    remark: string;
    token?: string;
    refreshToken?: string
}

export class UserInfo {
    userId: number;
    userCode: string;
    jwt: JWT
}

export class JWT {
    accessToken: string;
    refreshToken: string;
    expiredDate: number;
}

export class AlertModel {
    type: string;
    msg: string;
    timeout: number;
    isOpen: boolean
    dismissible: boolean
}

export class SelectModel {
    text: string;
    value: string;
    parentId: string
    selected: string
}

export class ConditionItem {
    field: string = ""
    value: any = ""
}

export class PageBase {
    conditionItems: Array<ConditionItem> = []
    parameters = [];
    pageIndex: number = 1;
    pageSize: number = 10;
    pageTotal: number = 0;
    dataTotal: number = 0;
    pageNumArray: number[] = [];   //用以存放所有分頁的數字(3頁就會是1,2,3)
    pageNumArrayMax: number = 0;   //分頁數的陣列最大數
    startPg: number = 0;     //分頁陣列，開始的頁數 
    orderByField: string;  //目前排序的欄位名稱
    orderByDirection: string;    //ASC，DESC
    routeMode: boolean = true // if using route
}

export class PageModel<T> extends PageBase {
    dataSource: T[] = [];
    selectedValues: T[] = [];
}

export class Menu {
    constructor(
        public id: number,
        public name: string,
        public url: string,
        public iconCss: string

    ) {
    }
}

export interface TodoItem {
    id: number;
    value: string;
    done: boolean;
}