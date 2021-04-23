export class Bug {
  id: string;
  name: string = '';
  priority: string = 'HIGH';
  projectId: string;
  module: string;
  type: string = 'LOGICAL';
  status: string = 'NEW';
  buildVersion: string;
  severity: string = 'LOW';
  testerId: string;
  developerId: string;
  synopsis: string;
  description: string;
  eta: Date;
  submitOn: Date;
  etaString: string;
}
