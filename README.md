#hexo-tag-googlemaps

Version: 1.1.1

Compatible with Hexo Version 3


## About

The google maps tag plugin for hexo is designed to be a way to add simple maps to your hexo site. First you need to add your Google Maps JavaScript API Key (get one [here](https://developers.google.com/maps/documentation/javascript/get-api-key)) to the main config (`_config.yml`):

```
google_maps_api_key: ThisIsMyOwnGoogleMapsAPIKey
```

The main tag, called `googlemaps` requires an endtag called `endgooglemaps`.

The main tag can have up to 5 arguments, with none being required. If a map is created without a center point, it will default to the first marker's center point. If a zoom level is not specified, it will default to 8.

```
{% googlemaps latitude longitude zoom width height %}
```

The content area is intended to be a list of markers. Each marker is to be on a separate line, in the order of its z index. Top of the list is z index of 0 and so on)

Each marker can take 4 arguments, and the first three are required. The properties are separated by `,`

```
Title, Latitude, Longitude, Icon

```

* Title Text : This is the message that appears if you click the marker.
* Latitude: The latitude of the marker
* Longitude: The Longitude of the marker
* Icon (optional): a url of a marker icon. This can be relative to a icon in the hexo install or locaded elsewhere on a cdn.
This replaces the usual icon ![http://i.imgur.com/ljtDDxV.png](http://i.imgur.com/ljtDDxV.png)

If you're looking for a lot of icons, try this place: [github.com/giangoulas/google-maps-icons](https://github.com/giangoulas/google-maps-icons/tree/d0da0fb6974bec62b7f8d0e0f96ca90dd5371767/wiki)

##Simple Example

A simple example makes it easy to see how this plugin works.


```md
{% googlemaps -33.9 151.2 10 100% 450px %}
  Bondi Beach, -33.890542, 151.274856,http://google-maps-icons.googlecode.com/files/cityhall-tourism.png
  Coogee Beach, -33.923036, 151.259052
  Cronulla Beach, -34.028249, 151.157507
  Manly Beach, -33.80010128657071, 151.28747820854187, http://google-maps-icons.googlecode.com/files/animals.png
  Maroubra Beach, -33.950198, 151.259302, http://google-maps-icons.googlecode.com/files/cocktail.png
{% endgooglemaps %}
```

The following code will produce the following map:

![http://i.imgur.com/PtcHFpQ.png](http://i.imgur.com/PtcHFpQ.png)

You may also put as many instances of this plugin on your page as you'd like.







