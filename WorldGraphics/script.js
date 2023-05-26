const inputSearch = document.querySelector('#search');
const ulsugestao = document.querySelector('#sugestoes');
let addedCodesList = [];
const defaultIndicator = "NY.GDP.MKTP.CD";
let indicador;
const country_codes = {
  'Aruba': 'AW',
  'África do Sul e Oriental': 'ZA',
  'Afeganistão': 'AF',
  'África Ocidental e Central': 'ZF',
  'Angola': 'AO',
  'Albânia': 'AL',
  'Andorra': 'AD',
  'mundo árabe': '1A',
  'Emirados Árabes Unidos': 'AE',
  'Argentina': 'AR',
  'Armênia': 'AM',
  'Samoa Americana': 'AS',
  'Antígua e Barbuda': 'AG',
  'Austrália': 'AU',
  'Áustria': 'AT',
  'Azerbaijão': 'AZ',
  'Burundi': 'BI',
  'Bélgica': 'BE',
  'Benin': 'BJ',
  'Burkina Faso': 'BF',
  'Bangladesh': 'BD',
  'Bulgária': 'BG',
  'bahrein': 'BH',
  'Bahamas, The': 'BS',
  'Bósnia e Herzegovina': 'BA',
  'Belarus': 'BY',
  'Belize': 'BZ',
  'shorts': 'BM',
  'Bolívia': 'BO',
  'Brasil': 'BR',
  'barbados': 'BB',
  'Brunei Darussalam': 'BN',
  'butão': 'BT',
  'Botsuana': 'BW',
  'República Centro-Africana': 'CF',
  'Canadá': 'CA',
  'Europa Central e Bálticos': 'XK',
  'Suíça': 'CH',
  'Ilhas do Canal': 'IC',
  'Chile': 'CL',
  'China': 'CN',
  'Costa do Marfim': 'CI',
  'Camarões': 'CM',
  'Congo, Demo. Rep.': 'CD',
  'Congo, Rep.': 'CG',
  'Colômbia': 'CO',
  'comores': 'KM',
  'Cabo Verde': 'CV',
  'Costa Rica': 'CR',
  'pequenos estados caribenhos': 'S3',
  'Cuba': 'CU',
  'Curaçao': 'CW',
  'Ilhas Cayman': 'KY',
  'Chipre': 'CY',
  'Czechia': 'CZ',
  'alemanha': 'DE',
  'Djibouti': 'DJ',
  'dominica': 'DM',
  'Dinamarca': 'DK',
  'República Dominicana': 'DO',
  'Argélia': 'DZ',
  'Ásia Oriental e Pacífico (excluindo alta renda)': '4E',
  'Dividendo demográfico inicial': '3A',
  'Ásia Oriental e Pacífico': '4P',
  'Europa e Ásia Central (excluindo alta renda)': 'XE',
  'Europa e Ásia Central': 'E9',
  'Equador': 'EC',
  'Egito, Rep. Árabe': 'EG',
  'área do euro': 'ZF',
  'Eritreia': 'ER',
  'Espanha': 'ES',
  'Estônia': 'EE',
  'Etiópia': 'ET',
  'Europa e Ásia Central (excluindo alta renda)': 'XE',
  'África Subsaariana (excluindo alta renda)': 'ZG',
  'Finlândia': 'FI',
  'Fiji': 'FJ',
  'França': 'FR',
  'Micronésia, Estados Federados da': 'FM',
  'Gabão': 'GA',
  'Reino Unido': 'GB',
  'Geórgia': 'GE',
  'Gana': 'GH',
  'Guiné': 'GN',
  'Gâmbia, The': 'GM',
  'Guiné-Bissau': 'GW',
  'Guiné Equatorial': 'GQ',
  'Grécia': 'GR',
  'Granada': 'GD',
  'Guatemala': 'GT',
  'Guam': 'GU',
  'Guiana': 'GY',
  'Hong Kong SAR, China': 'HK',
  'Honduras': 'HN',
  'Croácia': 'HR',
  'Haiti': 'HT',
  'Hungria': 'HU',
  'Indonésia': 'ID',
  'Índia': 'IN',
  'Irlanda': 'IE',
  'Irã, República Islâmica do': 'IR',
  'Iraque': 'IQ',
  'Islândia': 'IS',
  'Israel': 'IL',
  'Itália': 'IT',
  'Jamaica': 'JM',
  'Jordânia': 'JO',
  'Japão': 'JP',
  'Cazaquistão': 'KZ',
  'Quênia': 'KE',
  'Quirguistão': 'KG',
  'Camboja': 'KH',
  'Kiribati': 'KI',
  'São Cristóvão e Névis': 'KN',
  'Coreia, Rep. Popular Democrática da': 'KP',
  'Kuwait': 'KW',
  'Líbano': 'LB',
  'Libéria': 'LR',
  'Líbia': 'LY',
  'Santa Lúcia': 'LC',
  'Liechtenstein': 'LI',
  'Sri Lanka': 'LK',
  'Lesoto': 'LS',
  'Lituânia': 'LT',
  'Luxemburgo': 'LU',
  'Letônia': 'LV',
  'Macao SAR, China': 'MO',
  'São Martinho (parte francesa)': 'MF',
  'Marrocos': 'MA',
  'Monaco': 'MC',
  'Moldávia': 'MD',
  'Madagáscar': 'MG',
  'Maldivas': 'MV',
  'México': 'MX',
  'Ilhas Marshall': 'MH',
  'Macedônia do Norte': 'MK',
  'Mali': 'ML',
  'Malta': 'MT',
  'Myanmar': 'MM',
  'Montenegro': 'ME',
  'Mongólia': 'MN',
  'Ilhas Marianas do Norte': 'MP',
  'Moçambique': 'MZ',
  'Mauritânia': 'MR',
  'Maurício': 'MU',
  'Malawi': 'MW',
  'Malásia': 'MY',
  'Namíbia': 'NA',
  'Nova Caledônia': 'NC',
  'Níger': 'NE',
  'Nigéria': 'NG',
  'Nicarágua': 'NI',
  'Países Baixos': 'NL',
  'Noruega': 'NO',
  'Nepal': 'NP',
  'Nauru': 'NR',
  'Nova Zelândia': 'NZ',
  'Omã': 'OM',
  'Pacífico Sul': 'XP',
  'Paquistão': 'PK',
  'Panamá': 'PA',
  'Peru': 'PE',
  'Filipinas': 'PH',
  'Palau': 'PW',
  'Papua Nova Guiné': 'PG',
  'Polônia': 'PL',
  'Porto Rico': 'PR',
  'Coreia, República da': 'KR',
  'Portugal': 'PT',
  'Paraguai': 'PY',
  'Palestina, Estado da': 'PS',
  'Catar': 'QA',
  'Romênia': 'RO',
  'Rússia': 'RU',
  'Ruanda': 'RW',
  'Arábia Saudita': 'SA',
  'Sudão': 'SD',
  'Senegal': 'SN',
  'Singapura': 'SG',
  'Ilhas Salomão': 'SB',
  'Serra Leoa': 'SL',
  'El Salvador': 'SV',
  'San Marino': 'SM',
  'Somália': 'SO',
  'Sérvia': 'RS',
  'São Tomé e Príncipe': 'ST',
  'Suriname': 'SR',
  'Eslováquia': 'SK',
  'Eslovênia': 'SI',
  'Suécia': 'SE',
  'Suazilândia': 'SZ',
  'Seychelles': 'SC',
  'Síria': 'SY',
  'Ilhas Turks e Caicos': 'TC',
  'Chade': 'TD',
  'Togo': 'TG',
  'Tailândia': 'TH',
  'Tadjiquistão': 'TJ',
  'Turcomenistão': 'TM',
  'Timor-Leste': 'TL',
  'Tonga': 'TO',
  'Trinidad e Tobago': 'TT',
  'Tunísia': 'TN',
  'Turquia': 'TR',
  'Tuvalu': 'TV',
  'Taiwan, China': 'TW',
  'Tanzânia': 'TZ',
  'Ucrânia': 'UA',
  'Uganda': 'UG',
  'Estados Unidos': 'US',
  'Uruguai': 'UY',
  'Usbequistão': 'UZ',
  'São Vicente e Granadinas': 'VC',
  'Venezuela, RB': 'VE',
  'Ilhas Virgens Britânicas': 'VG',
  'Ilhas Virgens dos EUA': 'VI',
  'Vietnã': 'VN',
  'Vanuatu': 'VU',
  'Samoa': 'WS',
  'Kosovo': 'XK',
  'Iêmen, Rep. do': 'YE',
  'África do Sul': 'ZA',
  'Zâmbia': 'ZM',
  'Zimbabwe': 'ZW'
}

function buildIndicator(arg){
  indicador = arg;
  buildSrc(indicador)
}

function buildSrc(indicator) {
  if (indicator == undefined) {
    indicator = defaultIndicator;
  }
  
  var locations = addedCodesList.length > 0 ? addedCodesList.join("-") : "BR";
  
  let src = `https://data.worldbank.org/share/widget?indicators=${indicator}&locations=${locations}`;
  let iframe = document.querySelector('iframe');
  iframe.setAttribute('src', src);
}

function filtrarSugestoes(valor) {
  ulsugestao.innerHTML = '';
  const sugestoesFiltradas = Object.keys(country_codes).filter(country => country.toLowerCase().includes(valor.toLowerCase()));
  sugestoesFiltradas.forEach(sugestao => {
    let liElement = document.createElement('li');
    liElement.innerHTML = `<p>${sugestao}</p>`;
    liElement.addEventListener('mouseover', () => {
      inputSearch.value = sugestao;
    })
    ulsugestao.appendChild(liElement);
  })
}

inputSearch.addEventListener('input', () => {
  filtrarSugestoes(inputSearch.value);
});

function localizarIndice() {
  const entrada = inputSearch.value;
  if (entrada != '') {
    const valoresPossiveis = Object.keys(country_codes).filter(country => country.toLowerCase().includes(entrada.toLowerCase()));
    const numeroSigla = country_codes[valoresPossiveis[0]];
    return numeroSigla;
  }
}

function modify(arg) {
  const entrada = localizarIndice();
  if (entrada != null && entrada != -1) {
    if(arg == 'add'){
      addedCodesList.push(entrada);
    }
    if(arg == 'del'){
      addedCodesList = addedCodesList.filter(elemento => elemento !== entrada);
    }
    buildSrc(indicador);
    return addedCodesList;
  }
}

buildSrc();
