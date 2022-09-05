import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <div className="App h-100">
      <Header title="Galería de Imágenes con React" />
      <div className="container d-flex justify-content-center  align-items-center">
        <div className="row">
          <div className="col-md-4">
            <Card title="gato 1" src="http://placekitten.com/300/410" description="You went to school to learn girl
                    Things you never knew before
                    Like I before E except after C
                    And why 2 plus 2 makes 4
                    Now, now, now
                    I'm gonna teach you, teach you, teach you
                    All about love girl, all about love
                    Sit yourself down, take a seat
                    All you gotta do is repeat after me" />
          </div>
          <div className="col-md-4">
            <Card title="gato 2" src="http://placekitten.com/400/350" description="A B C, It's easy as
                    1 2 3, as simple as
                    Do re mi, A B C, 1 2 3
                    Baby you and me girl" />
          </div>
          <div className="col-md-4">
            <Card title="gato 3" src="http://placekitten.com/350/405" description="Come on and love me just a little bit
                    I'm gonna teach you how to sing it out
                    Come on, come on, come on
                    Let me tell you what it's all about
                    Reading, writing, arithmatic
                    Are the branches of the learning tree
                    But without the roots of love everyday girl
                    Your education ain't complete
                    Teacher's gonna show you (she's gonna show you)
                    How to get an A (na, na, na, na, na, na)
                    How to spell me, you, add the two
                    Listen to me baby thats all you got to do
                    Oh," />
          </div>
        </div>
      </div>
      <Footer description="galeria de gatitos excelent" />
    </div>
  );
}
export default App;
