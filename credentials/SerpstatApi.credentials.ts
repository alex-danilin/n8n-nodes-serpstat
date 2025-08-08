import {
	ICredentialType,
	INodeProperties,
	IHttpRequestMethods,
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
	test = {
		request: {
			method: 'POST' as IHttpRequestMethods,
			url: 'https://api.serpstat.com/v4/',
			body: `{
				"id": "n8n-test-{{$request.timestamp}}",
				"method": "SerpstatAccountProcedure.getApiBalance",
				"params": {
					"token": "{{$credentials.token}}"
				}
			}`,
			headers: {
				'Content-Type': 'application/json',
			},
		},
	};
}