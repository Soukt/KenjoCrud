export class Artist {
   _id:string;
  // ($mongo ObjectId)
  // required: true
  // database id

  name:	string;
  // required: true
  // name of the artist or band. Note that the database will not allow duplicates of this value

  photoUrl	:string;
  // ($url)
  // url link to a photo or picture of the artist

  birthdate:number;
  // minimum: 1909-01-01T00:00:00.000Z
  // maximum: 2030-12-31T00:00:00.000Z
  // year when the artist was born or the band was created

  deathDate:number;
  // minimum: 1909-01-01T00:00:00.000Z
  // maximum: 2030-12-31T00:00:00.000Z
  // year when the artist died or the band split up

 _createdAt:	string;
  // // ($date-time)
  // // dateTime when the artist was created in the database

 _updatedAt:	string;
  // // ($date-time)
  // // dateTime when the artist was updated in the database for the last time

  }
