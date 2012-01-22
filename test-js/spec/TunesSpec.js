var albumData;
albumData = [
  {
    title: "Album A",
    artist: "Artist A",
    tracks: [
      {
        title: "Track A",
        url: '/music/Album A Track A.mp3'
      }, {
        title: "Track B",
        url: '/music/Album A Track B.mp3'
      }
    ]
  }, {
    title: "Album B",
    artist: "Artist B",
    tracks: [
      {
        title: "Track A",
        url: '/music/Album B Track A.mp3'
      }, {
        title: "Track B",
        url: '/music/Album B Track B.mp3'
      }
    ]
  }
];
describe('Album', function() {
  beforeEach(function() {
    return this.album = new Album(albumData[0]);
  });
  it('creates from data', function() {
    return expect(this.album.get('tracks').length).toEqual(2);
  });
  return describe("first track", function() {
    return it("identifies correct first track", function() {
      return expect(this.album.isFirstTrack(0)).toBeTruthy();
    });
  });
});