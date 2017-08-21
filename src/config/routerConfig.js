//import indexComponent from '../containers/index/index.component';

const routeConfig = [{
    path: '/',
    //component: indexComponent,
    onEnter: function(nextState, replaceState) {
        //console.log('onEnter', nextState)
        let pathName = nextState.location.pathname.replace(/^\//, '')
        if (pathName == '') {
            replaceState(`index`)
        }
    },
    childRoutes: [{
        path: 'index',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/index/index.component').default)
            })
        }
    }, {
        path: 'product',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/productSearch/productSearch.component').default)
            })
        }
    }, {
        path: 'product-detail',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/productDetail/productDetail.component').default)
            })
        }
    }, {
        path: 'all-comment',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/allComment/allComment.component').default)
            })
        }
    }, {
        path: 'select-condition',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/selectCondition/selectCondition.component').default)
            })
        }
    }, {
        path: 'product-search',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/productSearch/productSearch.component').default)
            })
        }
    }, {
        path: 'logistics',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/logistics/logistics.component').default)
            })
        }
    }, {
            path: 'logistics-track',
            getComponents(location, callback) {
                require.ensure([], function(require) {
                    callback(null, require('../containers/logisticsTrack/logisticsTrack.component').default)
                })
            }
        },
         {
            path: 'bank-reconciliation',
            getComponents(location, callback) {
                require.ensure([], function(require) {
                    callback(null, require('../containers/bankReconciliation/bankReconciliation.component').default)
                })
            }
        },
          {
            path: 'bank-reconciliation-detail',
            getComponents(location, callback) {
                require.ensure([], function(require) {
                    callback(null, require('../containers/bankReconciliationDetail/bankReconciliationDetail.component').default)
                })
            }
        },{
        path: 'wallet',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/myWallet/wallet.component').default)
            })
        }
    }, {
        path: 'recharge',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/recharge/recharge.componet').default)
            })
        }
    }, {
        path: 'recommend',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/recommend/recommend.component').default)
            })
        }
    }, {
        path: 'login',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/login/login.component').default)
            })
        }
    }, {
        path: 'discuss',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/discuss/discuss.component').default)
            })
        }
    }, {
        path: 'check-history',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/checkHistory/checkHistory.component').default)
            })
        }
    }, {
        path: 'check-piece',
        getComponents(location, callback) {
            require.ensure([], function(require) {
                callback(null, require('../containers/checkPiece/checkPiece.component').default)
            })
        }
    }]
}];

export default routeConfig;