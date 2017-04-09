import { Injectable } from '@angular/core';
import {Healthpackage} from './healthpackage';
import { Centre } from './centre';
import { Branch } from './branch';
@Injectable()
export class PackagedetailsService {

  constructor() { }
public packageDetails: Healthpackage;
public cartPackageList:Array<Healthpackage>=[];
public totalPackageList:Array<Healthpackage>=[];
public cartCount: number =0;
public packageList:Array<Healthpackage>=[ {
      packageId:1,
      packageName: 'ANEMIA SCREENING TEST',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:500,
      cart:false,
      packageCount:1
    },
    {
      packageId:2,
      packageName: 'CHILD FEVER PACKAGE',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:500,
       cart:false,
      packageCount:1
    },
    {
      packageId:3,
      packageName: 'BASIC HEART CHECKUP',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:500,
       cart:false,
      packageCount:1
    },
     {
      packageId:4,
      packageName: 'BASIC HEALTH CHECKUP',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:500,
       cart:false,
      packageCount:1
    },
     {
      packageId:5,
      packageName: 'Health Package5',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:500,
       cart:false,
      packageCount:1
    },
     {
      packageId:6,
      packageName: 'Health Package6',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:500,
       cart:false,
      packageCount:1
    },
     {
      packageId:7,
      packageName: 'Health Package7',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:500,
       cart:false,
      packageCount:1
    }, {
      packageId:8,
      packageName: 'Health Package8',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:500,
       cart:false,
      packageCount:1
    }, {
      packageId:9,
      packageName: 'Health Package9',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:500,
       cart:false,
      packageCount:1
    }, {
      packageId:10,
      packageName: 'Health Package10',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:500,
       cart:false,
      packageCount:1
    }];
    
    getCentres() {
    return [
     new Centre(1, "Vijaya Health Care" ),
     new Centre(2, "Maxcure" ),
     
    ];
  }
  getBranches(){
    return [
      new Branch(1,1,"Secunderabad"),
      new Branch(2,1,"Jubilee Hills"),
      new Branch(3,2,"Madhapur"),
      new Branch(4,2,"Kukatpally"),
      new Branch(5,2,"Gachibowli"),
    ];
  }
}
