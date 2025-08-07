import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
} from 'n8n-workflow';

export class Serpstat implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Serpstat',
		name: 'serpstat',
		icon: 'file:serpstat.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["domain"]}}',
		description: 'Consume the Serpstat API to get organic competitors',
		defaults: {
			name: 'Serpstat',
		},
		inputs: ['main'] as any, // TODO: Fix type
		outputs: ['main'] as any, // TODO: Fix type
		credentials: [
			{
				name: 'serpstatApi',
				required: true,
			},
		],
		requestDefaults: {
			method: 'POST',
			json: true,
		},
		properties: [
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				required: true,
				description: 'The domain name to get competitors for. Example: allo.ua.',
			},
			{
				displayName: 'Search Engine',
				name: 'se',
				type: 'options',
				default: 'g_us',
				required: true,
				description: 'The search engine to use. Example: g_us.',
				options: [
					{ name: 'Bing_us', value: 'bing_us' },
					{ name: 'G_ad', value: 'g_ad' },
					{ name: 'G_ae', value: 'g_ae' },
					{ name: 'G_af', value: 'g_af' },
					{ name: 'G_ag', value: 'g_ag' },
					{ name: 'G_ai', value: 'g_ai' },
					{ name: 'G_al', value: 'g_al' },
					{ name: 'G_am', value: 'g_am' },
					{ name: 'G_ao', value: 'g_ao' },
					{ name: 'G_ar', value: 'g_ar' },
					{ name: 'G_as', value: 'g_as' },
					{ name: 'G_at', value: 'g_at' },
					{ name: 'G_au', value: 'g_au' },
					{ name: 'G_aw', value: 'g_aw' },
					{ name: 'G_az', value: 'g_az' },
					{ name: 'G_ba', value: 'g_ba' },
					{ name: 'G_bb', value: 'g_bb' },
					{ name: 'G_bd', value: 'g_bd' },
					{ name: 'G_be', value: 'g_be' },
					{ name: 'G_bf', value: 'g_bf' },
					{ name: 'G_bg', value: 'g_bg' },
					{ name: 'G_bh', value: 'g_bh' },
					{ name: 'G_bi', value: 'g_bi' },
					{ name: 'G_bj', value: 'g_bj' },
					{ name: 'G_bm', value: 'g_bm' },
					{ name: 'G_bn', value: 'g_bn' },
					{ name: 'G_bo', value: 'g_bo' },
					{ name: 'G_br', value: 'g_br' },
					{ name: 'G_bs', value: 'g_bs' },
					{ name: 'G_bt', value: 'g_bt' },
					{ name: 'G_bw', value: 'g_bw' },
					{ name: 'G_by', value: 'g_by' },
					{ name: 'G_bz', value: 'g_bz' },
					{ name: 'G_ca', value: 'g_ca' },
					{ name: 'G_cd', value: 'g_cd' },
					{ name: 'G_cf', value: 'g_cf' },
					{ name: 'G_cg', value: 'g_cg' },
					{ name: 'G_ch', value: 'g_ch' },
					{ name: 'G_ci', value: 'g_ci' },
					{ name: 'G_ck', value: 'g_ck' },
					{ name: 'G_cl', value: 'g_cl' },
					{ name: 'G_cm', value: 'g_cm' },
					{ name: 'G_cn', value: 'g_cn' },
					{ name: 'G_co', value: 'g_co' },
					{ name: 'G_cr', value: 'g_cr' },
					{ name: 'G_cv', value: 'g_cv' },
					{ name: 'G_cw', value: 'g_cw' },
					{ name: 'G_cx', value: 'g_cx' },
					{ name: 'G_cy', value: 'g_cy' },
					{ name: 'G_cz', value: 'g_cz' },
					{ name: 'G_de', value: 'g_de' },
					{ name: 'G_dj', value: 'g_dj' },
					{ name: 'G_dk', value: 'g_dk' },
					{ name: 'G_dm', value: 'g_dm' },
					{ name: 'G_do', value: 'g_do' },
					{ name: 'G_dz', value: 'g_dz' },
					{ name: 'G_ec', value: 'g_ec' },
					{ name: 'G_ee', value: 'g_ee' },
					{ name: 'G_eg', value: 'g_eg' },
					{ name: 'G_er', value: 'g_er' },
					{ name: 'G_es', value: 'g_es' },
					{ name: 'G_et', value: 'g_et' },
					{ name: 'G_fi', value: 'g_fi' },
					{ name: 'G_fj', value: 'g_fj' },
					{ name: 'G_fk', value: 'g_fk' },
					{ name: 'G_fm', value: 'g_fm' },
					{ name: 'G_fo', value: 'g_fo' },
					{ name: 'G_fr', value: 'g_fr' },
					{ name: 'G_ga', value: 'g_ga' },
					{ name: 'G_gd', value: 'g_gd' },
					{ name: 'G_ge', value: 'g_ge' },
					{ name: 'G_gf', value: 'g_gf' },
					{ name: 'G_gg', value: 'g_gg' },
					{ name: 'G_gh', value: 'g_gh' },
					{ name: 'G_gi', value: 'g_gi' },
					{ name: 'G_gl', value: 'g_gl' },
					{ name: 'G_gm', value: 'g_gm' },
					{ name: 'G_gn', value: 'g_gn' },
					{ name: 'G_gp', value: 'g_gp' },
					{ name: 'G_gq', value: 'g_gq' },
					{ name: 'G_gr', value: 'g_gr' },
					{ name: 'G_gt', value: 'g_gt' },
					{ name: 'G_gu', value: 'g_gu' },
					{ name: 'G_gw', value: 'g_gw' },
					{ name: 'G_gy', value: 'g_gy' },
					{ name: 'G_hk', value: 'g_hk' },
					{ name: 'G_hn', value: 'g_hn' },
					{ name: 'G_hr', value: 'g_hr' },
					{ name: 'G_ht', value: 'g_ht' },
					{ name: 'G_hu', value: 'g_hu' },
					{ name: 'G_id', value: 'g_id' },
					{ name: 'G_ie', value: 'g_ie' },
					{ name: 'G_il', value: 'g_il' },
					{ name: 'G_im', value: 'g_im' },
					{ name: 'G_in', value: 'g_in' },
					{ name: 'G_io', value: 'g_io' },
					{ name: 'G_iq', value: 'g_iq' },
					{ name: 'G_is', value: 'g_is' },
					{ name: 'G_it', value: 'g_it' },
					{ name: 'G_je', value: 'g_je' },
					{ name: 'G_jm', value: 'g_jm' },
					{ name: 'G_jo', value: 'g_jo' },
					{ name: 'G_jp', value: 'g_jp' },
					{ name: 'G_ke', value: 'g_ke' },
					{ name: 'G_kg', value: 'g_kg' },
					{ name: 'G_kh', value: 'g_kh' },
					{ name: 'G_ki', value: 'g_ki' },
					{ name: 'G_km', value: 'g_km' },
					{ name: 'G_kn', value: 'g_kn' },
					{ name: 'G_kr', value: 'g_kr' },
					{ name: 'G_kw', value: 'g_kw' },
					{ name: 'G_ky', value: 'g_ky' },
					{ name: 'G_kz', value: 'g_kz' },
					{ name: 'G_la', value: 'g_la' },
					{ name: 'G_lb', value: 'g_lb' },
					{ name: 'G_lc', value: 'g_lc' },
					{ name: 'G_li', value: 'g_li' },
					{ name: 'G_lk', value: 'g_lk' },
					{ name: 'G_lr', value: 'g_lr' },
					{ name: 'G_ls', value: 'g_ls' },
					{ name: 'G_lt', value: 'g_lt' },
					{ name: 'G_lu', value: 'g_lu' },
					{ name: 'G_lv', value: 'g_lv' },
					{ name: 'G_ly', value: 'g_ly' },
					{ name: 'G_ma', value: 'g_ma' },
					{ name: 'G_mc', value: 'g_mc' },
					{ name: 'G_md', value: 'g_md' },
					{ name: 'G_me', value: 'g_me' },
					{ name: 'G_mg', value: 'g_mg' },
					{ name: 'G_mh', value: 'g_mh' },
					{ name: 'G_mk', value: 'g_mk' },
					{ name: 'G_ml', value: 'g_ml' },
					{ name: 'G_mm', value: 'g_mm' },
					{ name: 'G_mn', value: 'g_mn' },
					{ name: 'G_mo', value: 'g_mo' },
					{ name: 'G_mp', value: 'g_mp' },
					{ name: 'G_mq', value: 'g_mq' },
					{ name: 'G_mr', value: 'g_mr' },
					{ name: 'G_ms', value: 'g_ms' },
					{ name: 'G_mt', value: 'g_mt' },
					{ name: 'G_mu', value: 'g_mu' },
					{ name: 'G_mv', value: 'g_mv' },
					{ name: 'G_mw', value: 'g_mw' },
					{ name: 'G_mx', value: 'g_mx' },
					{ name: 'G_my', value: 'g_my' },
					{ name: 'G_mz', value: 'g_mz' },
					{ name: 'G_na', value: 'g_na' },
					{ name: 'G_nc', value: 'g_nc' },
					{ name: 'G_ne', value: 'g_ne' },
					{ name: 'G_nf', value: 'g_nf' },
					{ name: 'G_ng', value: 'g_ng' },
					{ name: 'G_ni', value: 'g_ni' },
					{ name: 'G_nl', value: 'g_nl' },
					{ name: 'G_no', value: 'g_no' },
					{ name: 'G_np', value: 'g_np' },
					{ name: 'G_nr', value: 'g_nr' },
					{ name: 'G_nu', value: 'g_nu' },
					{ name: 'G_nz', value: 'g_nz' },
					{ name: 'G_om', value: 'g_om' },
					{ name: 'G_pa', value: 'g_pa' },
					{ name: 'G_pe', value: 'g_pe' },
					{ name: 'G_pf', value: 'g_pf' },
					{ name: 'G_pg', value: 'g_pg' },
					{ name: 'G_ph', value: 'g_ph' },
					{ name: 'G_pk', value: 'g_pk' },
					{ name: 'G_pl', value: 'g_pl' },
					{ name: 'G_pm', value: 'g_pm' },
					{ name: 'G_pn', value: 'g_pn' },
					{ name: 'G_pr', value: 'g_pr' },
					{ name: 'G_ps', value: 'g_ps' },
					{ name: 'G_pt', value: 'g_pt' },
					{ name: 'G_pw', value: 'g_pw' },
					{ name: 'G_py', value: 'g_py' },
					{ name: 'G_qa', value: 'g_qa' },
					{ name: 'G_re', value: 'g_re' },
					{ name: 'G_ro', value: 'g_ro' },
					{ name: 'G_rs', value: 'g_rs' },
					{ name: 'G_ru', value: 'g_ru' },
					{ name: 'G_rw', value: 'g_rw' },
					{ name: 'G_sa', value: 'g_sa' },
					{ name: 'G_sb', value: 'g_sb' },
					{ name: 'G_sc', value: 'g_sc' },
					{ name: 'G_se', value: 'g_se' },
					{ name: 'G_sg', value: 'g_sg' },
					{ name: 'G_sh', value: 'g_sh' },
					{ name: 'G_si', value: 'g_si' },
					{ name: 'G_sk', value: 'g_sk' },
					{ name: 'G_sl', value: 'g_sl' },
					{ name: 'G_sm', value: 'g_sm' },
					{ name: 'G_sn', value: 'g_sn' },
					{ name: 'G_so', value: 'g_so' },
					{ name: 'G_sr', value: 'g_sr' },
					{ name: 'G_st', value: 'g_st' },
					{ name: 'G_sv', value: 'g_sv' },
					{ name: 'G_sx', value: 'g_sx' },
					{ name: 'G_sz', value: 'g_sz' },
					{ name: 'G_tc', value: 'g_tc' },
					{ name: 'G_td', value: 'g_td' },
					{ name: 'G_tg', value: 'g_tg' },
					{ name: 'G_th', value: 'g_th' },
					{ name: 'G_tj', value: 'g_tj' },
					{ name: 'G_tk', value: 'g_tk' },
					{ name: 'G_tl', value: 'g_tl' },
					{ name: 'G_tm', value: 'g_tm' },
					{ name: 'G_tn', value: 'g_tn' },
					{ name: 'G_to', value: 'g_to' },
					{ name: 'G_tr', value: 'g_tr' },
					{ name: 'G_tt', value: 'g_tt' },
					{ name: 'G_tv', value: 'g_tv' },
					{ name: 'G_tw', value: 'g_tw' },
					{ name: 'G_tz', value: 'g_tz' },
					{ name: 'G_ua', value: 'g_ua' },
					{ name: 'G_ug', value: 'g_ug' },
					{ name: 'G_uk', value: 'g_uk' },
					{ name: 'G_us', value: 'g_us' },
					{ name: 'G_uy', value: 'g_uy' },
					{ name: 'G_uz', value: 'g_uz' },
					{ name: 'G_va', value: 'g_va' },
					{ name: 'G_vc', value: 'g_vc' },
					{ name: 'G_ve', value: 'g_ve' },
					{ name: 'G_vg', value: 'g_vg' },
					{ name: 'G_vi', value: 'g_vi' },
					{ name: 'G_vn', value: 'g_vn' },
					{ name: 'G_vu', value: 'g_vu' },
					{ name: 'G_wf', value: 'g_wf' },
					{ name: 'G_ws', value: 'g_ws' },
					{ name: 'G_ye', value: 'g_ye' },
					{ name: 'G_yt', value: 'g_yt' },
					{ name: 'G_za', value: 'g_za' },
					{ name: 'G_zm', value: 'g_zm' },
					{ name: 'G_zw', value: 'g_zw' },
					{ name: 'G_сс', value: 'g_сс' },
				],
			},
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				options: [
					{
						displayName: 'Page',
						name: 'page',
						type: 'number',
						default: 1,
						description: 'Page number in response. >= 1. Default: 1',
					},
					{
						displayName: 'Size',
						name: 'size',
						type: 'number',
						default: 100,
						description: 'Number of results per page in response. >= 10, <= 500. Default: 100',
					},
					{
						displayName: 'Sort Field',
						name: 'sortField',
						type: 'string',
						default: 'relevance',
						description: 'Field to sort by. E.g., relevance, common, all, visibility, missing.',
					},
					{
						displayName: 'Sort Order',
						name: 'sortOrder',
						type: 'options',
						default: 'desc',
						options: [
							{ name: 'Ascending', value: 'asc' },
							{ name: 'Descending', value: 'desc' },
						],
						description: 'The sort order for the results',
					},
				],
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const domain = this.getNodeParameter('domain', i, '') as string;
			const se = this.getNodeParameter('se', i, '') as string;
			const additionalFields = this.getNodeParameter('additionalFields', i, {}) as {
				page?: number;
				size?: number;
				sortField?: string;
				sortOrder?: 'asc' | 'desc';
			};

			const params: any = {
				domain,
				se,
			};

			if (additionalFields.page) {
				params.page = additionalFields.page;
			}
			if (additionalFields.size) {
				params.size = additionalFields.size;
			}
			if (additionalFields.sortField && additionalFields.sortOrder) {
				params.sort = {
					[additionalFields.sortField]: additionalFields.sortOrder,
				};
			}

						const credentials = await this.getCredentials('serpstatApi');
			const token = credentials.token;

			const body = {
				id: `n8n-request-${Date.now()}`,
				method: 'SerpstatDomainProcedure.getOrganicCompetitorsPage',
				params,
			};

			try {
				const responseData = await this.helpers.httpRequest({ method: 'POST', url: `https://api.serpstat.com/v4/?token=${token}`, body, json: true });

				if (responseData.error) {
					const errorMessage = responseData.error.message || JSON.stringify(responseData.error);
					throw new NodeOperationError(this.getNode(), new Error(`Serpstat API error: ${errorMessage}`));
				}

				if (responseData.result && responseData.result.data) {
					returnData.push(...this.helpers.returnJsonArray(responseData.result.data));
				} else {
					console.log('Serpstat API response did not contain result.data:', JSON.stringify(responseData, null, 2));
				}
			} catch (error) {
				if (error instanceof NodeOperationError) {
					throw error;
				}
				throw new NodeOperationError(this.getNode(), error);
			}
		}

		return [returnData];
	}
}
