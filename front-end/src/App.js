import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// page & layout imports
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";
import Bodybuilding from "./components/BodyBuildingCard";
import Notreal from "./pages/Notreal";
import Crossfit from "./components/CrossfitCard";
import Motivation from "./pages/Motivation";
import Outside from "./pages/Outside";
import GettingStarted from "./components/GettingStartedCard";
import BodybuildingPage from "./pages/Bodybuilding";
import CrossfitPage from "./pages/Crossfit";
import RehabPage from "./pages/Rehab";
import Start from "./pages/Start";
import MotivationPage from "./pages/Motivation";
import New from "./pages/New";

//apollo
const client = new ApolloClient({
  uri: "http://axels-mbp.lan:1337/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>

            <Route path="/details/:id">
              <ReviewDetails />
            </Route>
            <Route path="/category/:id">
              <Category />
            </Route>
            <Route exact path="/Bodybuilding">
              <BodybuildingPage />
            </Route>
            <Route exact path="/Crossfit">
              <CrossfitPage />
            </Route>

            <Route exact path="/Motivation">
              <MotivationPage />
            </Route>
            <Route exact path="/Aeshetics">
              <Outside />
            </Route>
            <Route exact path="/rehab">
              <RehabPage />
            </Route>

            <Route exact path="/GetStarted">
              <New />
            </Route>
          </Switch>
        </div>
        <Footer />
      </ApolloProvider>
    </Router>
  );
}

export default App;
