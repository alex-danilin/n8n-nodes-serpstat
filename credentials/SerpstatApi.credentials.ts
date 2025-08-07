import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SerpstatApi implements ICredentialType {
	name = 'serpstatApi';
	displayName = 'Serpstat API';
	documentationUrl = 'https://serpstat.com/users/profile/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'token',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
		},
	];
	
}
