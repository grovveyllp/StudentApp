export interface POffice {
  message: string;
  status: string;
  postOffice: PostOfficeDetailModel[];
}

export interface PostOfficeDetailModel {
  name: string;
  description: string;
  branchType: string;
  deliveryStatus: string;
  circle: string;
  district: string;
  division: string;
  region: string;
  state: string;
  country: string;
}
