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
};

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
  changeData(data) {
    this.formData = data;
    return this.formData;
  },
  rooms: "inline",
  floor: "flex",
  typeBield: "inline",
  filterClassName: [
    "filter-container filterHome-filter-container",
    "list-filter-container",
    "searchBlok",
    "flex-container",
    "home-header3",
    "home14-0",
  ],
  openFilterPage() {
    this.filterClassName = [
      "filter-container2 filterHome-filter-container",
      "list-filter-container2",
      "searchBlok2",
      "flex-container2",
      "home-header4",
      "home14-1",
    ];
  },
  openHomePage() {
    this.filterClassName = [
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
    this.typeBield = "inline";
    this.filt.search = "home";
    return this;
  },
  shop() {
    this.rooms = "none";
    this.floor = "none";
    this.typeBield = "none";
    this.filt.search = "shop";
    return this;
  },
  land() {
    this.rooms = "none";
    this.floor = "none";
    this.typeBield = "none";
    this.filt.search = "land";
    return this;
  },
  flat() {
    this.rooms = "inline";
    this.floor = "flex";
    this.typeBield = "inline";
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
    };
  },
};
// localStorage.setItem('filt', state.filt)
// (localStorage.getItem('filt'))?state.filt=localStorage.getItem('filt') :localStorage.setItem('filt', state.filt)

export { state, store };
