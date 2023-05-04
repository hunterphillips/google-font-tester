const fontOptions = [
  'Roboto',
  'Open Sans',
  'Noto Sans JP',
  'Montserrat',
  'Lato',
  'Poppins',
  'Roboto Condensed',
  'Source Sans Pro',
  'Material Icons',
  'Inter',
  'Roboto Mono',
  'Oswald',
  'Raleway',
  'Noto Sans',
  'Ubuntu',
  'Roboto Slab',
  'Nunito Sans',
  'Nunito',
  'Rubik',
  'Playfair Display',
  'Merriweather',
  'PT Sans',
  'Noto Sans KR',
  'Kanit',
  'Work Sans',
  'Fira Sans',
  'Noto Sans TC',
  'Quicksand',
  'Mukta',
  'Barlow',
  'Inconsolata',
  'Mulish',
  'DM Sans',
  'IBM Plex Sans',
  'Titillium Web',
  'Heebo',
  'PT Serif',
  'Noto Serif',
  'Libre Franklin',
  'Manrope',
  'Nanum Gothic',
  'Karla',
  'Material Icons Outlined',
  'Hind Siliguri',
  'Josefin Sans',
  'Arimo',
  'Libre Baskerville',
  'Dosis',
  'PT Sans Narrow',
  'Source Serif Pro',
];

const fontSelect = document.getElementById('font-select');

fontOptions.forEach((option) => {
  let newOption = document.createElement('option');
  newOption.text = option;
  fontSelect.add(newOption);
});
