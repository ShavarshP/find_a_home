const store = "createStore(reducers);";

export default store;

const filterData = {
  Mobile_number: "",
  area: "",
  building_floors: "",
  building_type: "",
  category: "",
  description: "",
  district: "",
  floor: "",
  price: "",
  rent: false,
  rooms: "",
  sale: false,
  search_code: "",
  street: "",
}

const state = {
  countOfPage: 0,
  filt: filterData,
  formData: {
    street: "",
    img: [],
    Mobile_number: "",
    area: "",
    building_type: "",
    category: "",
    description: "",
    district: "",
    floor: "",
    price: "",
    rent: false,
    rooms: "",
    sale: false,
    search_code: "",
    loc: "",
  },
  changedata(data) {
    this.formData = data;
    return this.formData;
  },
  rooms: "inline",
  floor: "flex",
  typrBild: "inline",
  filtClassName: [
    "filter-container filterHome-filter-container",
    "list-filter-container",
    "searchBlok",
    "flex-container",
    "home-header3",
    "home14-0",
  ],
  openFiltPage() {
    this.filtClassName = [
      "filter-container2 filterHome-filter-container",
      "list-filter-container2",
      "searchBlok2",
      "flex-container2",
      "home-header4",
      "home14-1",
    ];
  },
  openHomePage() {
    this.filtClassName = [
      "filter-container filterHome-filter-container",
      "list-filter-container",
      "searchBlok",
      "flex-container",
      "home-header3",
      "home14-0",
    ];
  },
  home() {
    this.rooms = "inline";
    this.floor = "none";
    this.typrBild = "inline";
    this.filt.search = "home";
    return this;
  },
  shop() {
    this.rooms = "none";
    this.floor = "none";
    this.typrBild = "none";
    this.filt.search = "shop";
    return this;
  },
  land() {
    this.rooms = "none";
    this.floor = "none";
    this.typrBild = "none";
    this.filt.search = "land";
    return this;
  },
  flat() {
    this.rooms = "inline";
    this.floor = "flex";
    this.typrBild = "inline";
    this.filt.search = "flat";
    return this;
  },
  clineFilter() {
    this.filt = {
      Mobile_number: "",
      area: "",
      building_floors: "",
      building_type: "",
      category: "",
      description: "",
      district: "",
      floor: "",
      price: "",
      rent: false,
      rooms: "",
      sale: false,
      search_code: "",
      street: "",
    }
  }
};
// localStorage.setItem('filt', state.filt)
// (localStorage.getItem('filt'))?state.filt=localStorage.getItem('filt') :localStorage.setItem('filt', state.filt)

export { state, store };
