
//  <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}></I18n>
import enJson from '../../locales/en.json'
const initState = {
    locale: 'en',
    // lngDict: enJson
    lngDict: require('../../locales/en.json')
}
function global(state = initState, action) {
    switch (action.type) {
      case "CHANGELNG":
        return { 
          locale: action.value,
          lngDict: require(`../../locales/${action.value}.json`)
        };
      default:
        return state;
    }
  }
  
  export default global;
  