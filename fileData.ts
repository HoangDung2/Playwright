
export interface login {
    User: tc[];
}
export interface tc {
    username: string;
    password: string;
}
export interface loginfalse {
    UserFalse: tc_false[];
}
export interface tc_false {
    username: string;
    password: string;
}
export interface loginUnfill {
    UserUnfull: tc_unfill[];
}
export interface tc_unfill {
    username: string;
    password: string;
}
export interface search {
    User: tc_search[];
}
export interface tc_search {
    userole: string;
    status: string;
}
export interface Employee {
    User: employee[];
}
export interface employee{
    username: string;
    userole: string;
    employeename:string;
    status:string;
    editusername: string;
}
import * as fs from 'fs';
const jsonString = fs.readFileSync('D:/2/playwright_orangehrm/filedata.json', 'utf-8');
var data = JSON.parse(jsonString);
export { data };