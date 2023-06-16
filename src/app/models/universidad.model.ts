export interface Universidad {
  country:          string;
  alpha_two_code:   string;
  name:             string;
  "state-province": null | string;
  domains:          string[];
  web_pages:        string[];
}
