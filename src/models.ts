export class Location {
  constructor(public lat: number, public lng: number) {

  }
}

export class Place {
  constructor(public title: string,
              public desc: string,
              public location: Location,
              public imgPth:string)
  {

  }
}
