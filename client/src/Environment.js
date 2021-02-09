import { SubscriptionClient } from 'subscriptions-transport-ws'

const {
    Environment,
    Network,
    RecordSource,
    Store,
    Observable
} = require('relay-runtime')

const source = new RecordSource()
const store = new Store(source)

const fetchQuery = (operation, variables) => {

    const withToken = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'mode': 'no-cors',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    const withoutToken = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'mode': 'no-cors'
    }
    const headers = localStorage.getItem('token') ? withToken : withoutToken

    return fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json()
    })

}

const setupSubscription = (config, variables, cacheConfig, observer) => {
    const query = config.text
    const subscriptionClient = new SubscriptionClient('ws://localhost:5000/graphql', { reconnect: true })
    return Observable.create(sink => {
        const c = subscriptionClient.request({ query, variables }).subscribe(sink);
        return c;
    });
}
  
const network = Network.create(fetchQuery, setupSubscription) 
const handlerProvider = null

const environment = new Environment({
    handlerProvider, 
    network,
    store,
})

export default environment
