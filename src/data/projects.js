// TODO Add a couple lines about each project
const data = [
  {
    title: 'Improving the Computational Efficiency of Deep Neural Networks using Filter Approximation Techniques',
    subtitle: 'Masters Thesis',
    image: '/images/projects/cnn.png',
    date: '2019-05-01',
    desc:
      'Implemented a dynamic, input dependent filter approximation and selection technique to improve the computational efficiency of deep neural networks. The approximation techniques convert 32 bit floating point filter weights in the convolutional and fully connected layers of the network into smaller precision values. This is done by reducing the number of bits used to represent the weights.',
  },
  {
    title: '16 Squares of Blacksburg',
    subtitle: 'AR Application showing the architectural history of Blacksburg',
    link: 'https://www.youtube.com/watch?v=QxmlbWkX-e4',
    image: '/images/projects/AR.jpeg',
    date: '2018-05-20',
    desc:
      'Built an Augmented Reality App called 16 Squares of Blacksburg in C# and designed on Unity using Vuforia SDK to demonstrate the history of Blacksburg. Using 3D object models of 50+ buildings, the app was aimed to be an used as an educational tool where users could click on a building to get information about it along with a variety of interaction techniques like pinch to zoom, slide to rotate etc.',
  },
  {
    title: 'Text Summarization using Deep Learning',
    subtitle: 'Utilizing text processing and deep learning to summarize a corpus of data on Hurricane Irma',
    link: 'https://vtechworks.lib.vt.edu/handle/10919/86372',
    image: '/images/projects/TextSummarization.jpg',
    date: '2018-12-28',
    desc:
      'Performed abstractive text summarization on a Hurricane Irma dataset containing more than 16,000 documents.'
       + 'Some of the initial tasks included tweet and web page analysis followed by performing several'
      + 'text cleaning and boilerplate removal tasks such as custom stop word removal, lemmatization, tokenization and POS tagging'
      + 'using Python’s NLTK Toolkit. Post data preprocessing, the text summarization was performed by using a deep learning model'
      + 'called the Pointer Generator Network using TensorFlow.',
  },
  {
    title: 'Cellphone Charging Station using Raspberry Pi',
    subtitle: 'Charge your phone while staying entertained!',
    link: 'https://www.youtube.com/watch?v=FclGnrLOyYU',
    image: '/images/projects/rasp.jpeg',
    date: '2017-05-15',
    desc:
      'Built a cellphone charger and entertainment station using Raspberry Pi 3 and a coin sensor.'
      + 'The coin sensor detected the value of the coin and ran the system for a pre-programmed amount of time. '
      + ' Along with the charging unit, I also integrated a floppy bird game and snake-maze game along with a jukebox into the Pi.'
      + ' The user could select their mode of entertainment while the phone would charge.',
  },
];

export default data;
