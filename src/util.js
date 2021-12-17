import { v4 as uuidv4 } from 'uuid'

function util() {
  return [
    {
      name: 'Silience',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg',
      artist: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8425',
      color: ['#926F2A', '#B5E6FE'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Chrysalism',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg',
      artist: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8405',
      color: ['#926F2A', '#B5E6FE'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Birds Fly Higher Than The Moon',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg',
      artist: 'Yasper',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9367',
      color: ['#926F2A', '#B5E6FE'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Vibe',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/09/dc49d7971512be0192848d072efdaaab91a4c73c-1024x1024.jpg',
      artist: 'Moods',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10002',
      color: ['#926F2A', '#B5E6FE'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'London Love Letters',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg',
      artist: 'Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=7914',
      color: ['#926F2A', '#B5E6FE'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Jam session',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg',
      artist: 'Montell Fish',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9003',
      color: ['#926F2A', '#B5E6FE'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Sunlit',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg',
      artist: 'Cloudchord',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=7833',
      color: ['#926F2A', '#B5E6FE'],
      id: uuidv4(),
      active: false,
    },
  ]
}

export default util
