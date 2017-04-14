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
      packageName: 'BASIC HEALTH CHECKUP',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:1600,
      cart:false,
      packageCount:1
    },
    {
      packageId:2,
      packageName: 'MASTER HEALTH CHECKUP',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:3900,
       cart:false,
      packageCount:1
    },
    {
      packageId:3,
      packageName: 'BASIC HEART HEALTH CHECKUP',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:2300,
       cart:false,
      packageCount:1
    },
     {
      packageId:4,
      packageName: 'COMPLETE HEART HEALTH CHECKUP',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:10000,
       cart:false,
      packageCount:1
    },
     {
      packageId:5,
      packageName: 'DIABETIC HEALTH CHECKUP',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:1500,
       cart:false,
      packageCount:1
    },
     {
      packageId:6,
      packageName: 'PRE DIABEIC HEALTH CHECKUP',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:1000,
       cart:false,
      packageCount:1
    },
     {
      packageId:7,
      packageName: 'SENIOR HEALTH CHECKUP',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:8900,
       cart:false,
      packageCount:1
    }, {
      packageId:8,
      packageName: 'THYROID SCREENING TEST',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:1000,
       cart:false,
      packageCount:1
    }, {
      packageId:9,
      packageName: 'ANEMIA SCREENING TEST',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:2100,
       cart:false,
      packageCount:1
    }, {
      packageId:10,
      packageName: 'PANCREATIC SCREENING TEST',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:2800,
       cart:false,
      packageCount:1
    }, {
       packageId:11,
      packageName: 'LIVER FUNCTION TEST',
      packageDetails: 'Some description which can be filled here for further description',
      packageCost:6900,
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
