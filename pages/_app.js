import '../styles/globals.css'
import Amplify from 'aws-amplify';
import config from '../src/aws-exports';
Amplify.configure(config);
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withAuthenticator(MyApp);
