import { authorize, authorizeFail } from './authorize';

//获取发票抬头
export function invoiceTitle (): Promise<any> {
	return authorize({
		scope: `scope.invoiceTitle`
	}).then(() => {
		return new Promise(( resolve, reject ) => {
			uni.chooseInvoiceTitle({
				success ( res: any ) {
					resolve(res);
				},
				fail ( err: any ) {
					reject(err);
				}
			});
		});
	}).catch(( err: any ) => {
		const {errMsg} = err;
		if (/auth/.test(errMsg)) {
			//提醒授权错误，可跳转授权页面
			authorizeFail({
				type: 'invoiceTitle'
			});
		}
		return Promise.reject(err);
	});
}

//在Vue中扩展
export function invoiceInVue ( Vue: any ) {
	Vue.prototype.$chooseInvoiceTitle = invoiceTitle;
}