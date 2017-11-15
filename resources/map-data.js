const map_data = 'city,city_ascii,lat,lng,pop,country,iso2,iso3,province\
aTokyo,Tokyo,35.68501691,139.7514074,"22,006,300",Japan,JP,JPN,Tokyo\
Mumbai,Mumbai,19.01699038,72.8569893,"15,834,918",India,IN,IND,Maharashtra\
Mexico City,Mexico City,19.44244244,-99.1309882,"14,919,501",Mexico,MX,MEX,Distrito Federal\
Shanghai,Shanghai,31.21645245,121.4365047,"14,797,756",China,CN,CHN,Shanghai\
Sao Paulo,Sao Paulo,-23.55867959,-46.62501998,"14,433,148",Brazil,BR,BRA,São Paulo\
New York,New York,40.74997906,-73.98001693,"13,524,139",United States of America,US,USA,New York\
Karachi,Karachi,24.86999229,66.99000891,"11,877,110",Pakistan,PK,PAK,Sind\
Buenos Aires,Buenos Aires,-34.60250161,-58.39753137,"11,862,073",Argentina,AR,ARG,Ciudad de Buenos Aires\
Delhi,Delhi,28.6699929,77.23000403,"11,779,607",India,IN,IND,Delhi\
Moscow,Moscow,55.75216412,37.61552283,"10,452,000",Russia,RU,RUS,Moskva\
Istanbul,Istanbul,41.10499615,29.01000159,"10,003,305",Turkey,TR,TUR,Istanbul\
Dhaka,Dhaka,23.72305971,90.40857947,"9,899,167",Bangladesh,BD,BGD,Dhaka\
Cairo,Cairo,30.04996035,31.24996822,"9,813,807",Egypt,EG,EGY,Al Qahirah\
Seoul,Seoul,37.5663491,126.999731,"9,796,000",South Korea,KR,KOR,Seoul\
Kolkata,Kolkata,22.4949693,88.32467566,"9,709,196",India,IN,IND,West Bengal\
Beijing,Beijing,39.92889223,116.3882857,"9,293,301",China,CN,CHN,Beijing\
Jakarta,Jakarta,-6.174417705,106.8294376,"8,832,561",Indonesia,ID,IDN,Jakarta Raya\
Los Angeles,Los Angeles,33.98997825,-118.1799805,"8,097,410",United States of America,US,USA,California\
London,London,51.49999473,-0.116721844,"7,994,105",United Kingdom,GB,GBR,Westminster\
Tehran,Tehran,35.67194277,51.42434403,"7,513,155",Iran,IR,IRN,Tehran\
Lima,Lima,-12.04801268,-77.05006209,"7,385,117",Peru,PE,PER,Lima\
Manila,Manila,14.60415895,120.9822172,"7,088,788",Philippines,PH,PHL,Metropolitan Manila\
Bogota,Bogota,4.596423563,-74.08334396,"7,052,831",Colombia,CO,COL,Bogota\
Osaka,Osaka,34.75003522,135.4601448,"6,943,207",Japan,JP,JPN,Osaka\
Rio de Janeiro,Rio de Janeiro,-22.92502317,-43.22502079,"6,879,088",Brazil,BR,BRA,Rio de Janeiro\
Kinshasa,Kinshasa,-4.329724102,15.31497188,"6,704,352",Congo (Kinshasa),CD,COD,Kinshasa City\
Lahore,Lahore,31.55997154,74.35002478,"6,443,944",Pakistan,PK,PAK,Punjab\
Guangzhou,Guangzhou,23.1449813,113.3250101,"5,990,913",China,CN,CHN,Guangdong\
Bangalore,Bangalore,12.96999514,77.56000972,"5,945,524",India,IN,IND,Karnataka\
Chicago,Chicago,41.82999066,-87.75005497,"5,915,976",United States of America,US,USA,Illinois\
Bangkok,Bangkok,13.74999921,100.5166447,"5,904,238",Thailand,TH,THA,Bangkok Metropolis\
Hong Kong,Hong Kong,22.3049809,114.1850093,"5,878,790",Hong Kong S.A.R.,HK,HKG,\
Chennai,Chennai,13.08998781,80.27999874,"5,745,532",India,IN,IND,Tamil Nadu\
Wuhan,Wuhan,30.58003135,114.270017,"5,713,603",China,CN,CHN,Hubei\
Tianjin,Tianjin,39.13002626,117.2000191,"5,473,104",China,CN,CHN,Tianjin\
Chongqing,Chongqing,29.56497703,106.5949816,"5,214,014",China,CN,CHN,Chongqing\
Baghdad,Baghdad,33.3386485,44.39386877,"5,054,000",Iraq,IQ,IRQ,Baghdad\
Hyderabad,Hyderabad,17.39998313,78.47995357,"4,986,908",India,IN,IND,Andhra Pradesh\
Paris,Paris,48.86669293,2.333335326,"4,957,589",France,FR,FRA,Île-de-France\
Taipei,Taipei,25.03583333,121.5683333,"4,759,523",Taiwan,TW,TWN,Taipei City\
Lagos,Lagos,6.443261653,3.391531071,"4,733,768",Nigeria,NG,NGA,Lagos\
Toronto,Toronto,43.69997988,-79.42002079,"4,573,711",Canada,CA,CAN,Ontario\
Ahmedabad,Ahmedabad,23.03005292,72.58000362,"4,547,355",India,IN,IND,Dadra and Nagar Haveli\
Dongguan,Dongguan,23.0488889,113.7447222,"4,528,000",China,CN,CHN,Guangdong\
Ho Chi Minh City,Ho Chi Minh City,10.78002545,106.6950272,"4,390,666",Vietnam,VN,VNM,Ho Chi Minh City\
Riyadh,Riyadh,24.64083315,46.77274166,"4,335,481",Saudi Arabia,SA,SAU,Ar Riyad\
Shenzhen,Shenzhen,22.55237051,114.1221231,"4,291,796",China,CN,CHN,Guangdong\
Singapore,Singapore,1.293033466,103.8558207,"4,236,615",Singapore,SG,SGP,\
Chittagong,Chittagong,22.32999229,91.79996741,"4,224,611",Bangladesh,BD,BGD,Chittagong\
Shenyeng,Shenyeng,41.80497927,123.4499735,"4,149,596",China,CN,CHN,Liaoning\
Sydney,Sydney,-33.92001097,151.1851798,"4,135,711",Australia,AU,AUS,New South Wales\
Houston,Houston,29.81997438,-95.33997929,"4,053,287",United States of America,US,USA,Texas\
Chengdu,Chengdu,30.67000002,104.0700195,"4,036,719",China,CN,CHN,Sichuan\
St. Petersburg,St. Petersburg,59.93901451,30.31602006,"4,023,106",Russia,RU,RUS,City of St. Petersburg\
Alexandria,Alexandria,31.20001935,29.94999589,"3,988,258",Egypt,EG,EGY,Al Iskandariyah\
Belo Horizonte,Belo Horizonte,-19.91502602,-43.91500452,"3,974,112",Brazil,BR,BRA,Minas Gerais\
Pune,Pune,18.53001752,73.85000362,"3,803,872",India,IN,IND,Maharashtra\
Yokohama,Yokohama,35.32002626,139.5800484,"3,697,894",Japan,JP,JPN,Kanagawa\
Rangoon,Rangoon,16.7833541,96.16667761,"3,694,910",Myanmar,MM,MMR,Yangon\
Xian,Xian,34.27502545,108.8949963,"3,617,406",China,CN,CHN,Shaanxi\
Luanda,Luanda,-8.838286114,13.23442704,"3,562,086",Angola,AO,AGO,Luanda\
Ankara,Ankara,39.92723859,32.86439164,"3,511,690",Turkey,TR,TUR,Ankara\
Philadelphia,Philadelphia,39.99997316,-75.16999597,"3,504,775",United States of America,US,USA,Pennsylvania\
Abidjan,Abidjan,5.319996967,-4.04004826,"3,496,198",Ivory Coast,CI,CIV,Lagunes\
Busan,Busan,35.09505292,129.0100476,"3,480,000",South Korea,KR,KOR,Busan\
Harbin,Harbin,45.74998395,126.6499849,"3,425,442",China,CN,CHN,Heilongjiang\
Nanjing,Nanjing,32.05001914,118.7799743,"3,383,005",China,CN,CHN,Jiangsu\
Surat,Surat,21.19998374,72.84003943,"3,368,252",India,IN,IND,Dadra and Nagar Haveli\
Khartoum,Khartoum,15.58807823,32.53417924,"3,364,324",Sudan,SD,SDN,Khartoum\
Hechi,Hechi,23.09653465,109.6091129,"3,275,190",China,CN,CHN,Guangxi\
Barcelona,Barcelona,41.38329958,2.183370319,"3,250,798",Spain,ES,ESP,Cataluña\
Berlin,Berlin,52.52181866,13.40154862,"3,250,007",Germany,DE,DEU,Berlin\
Casablanca,Casablanca,33.59997622,-7.616367433,"3,162,955",Morocco,MA,MAR,Grand Casablanca\
Kabul,Kabul,34.51669029,69.18326005,"3,160,266",Afghanistan,AF,AFG,Kabul\
Kano,Kano,11.99997683,8.5200378,"3,140,000",Nigeria,NG,NGA,Kano\
Brasilia,Brasilia,-15.78334023,-47.91605229,"3,139,980",Brazil,BR,BRA,Distrito Federal\
Salvador,Salvador,-12.9699719,-38.47998743,"3,081,423",Brazil,BR,BRA,Bahia\
Montréal,Montréal,45.49999921,-73.58329696,"3,017,278",Canada,CA,CAN,Québec\
Dallas,Dallas,32.82002382,-96.84001693,"3,004,852",United States of America,US,USA,Texas\
Kanpur,Kanpur,26.4599986,80.3199963,"2,992,625",India,IN,IND,Uttar Pradesh\
Miami,Miami,25.7876107,-80.22410608,"2,983,947",United States of America,US,USA,Florida\
Fortaleza,Fortaleza,-3.750017884,-38.57998132,"2,958,718",Brazil,BR,BRA,Ceará\
Jeddah,Jeddah,21.51688946,39.21919755,"2,939,723",Saudi Arabia,SA,SAU,Makkah\
Haora,Haora,22.58039044,88.32994665,"2,934,655",India,IN,IND,West Bengal\
Addis Ababa,Addis Ababa,9.033310363,38.70000443,"2,928,865",Ethiopia,ET,ETH,Addis Ababa\
Guadalajara,Guadalajara,20.67001609,-103.3300342,"2,919,295",Mexico,MX,MEX,Jalisco\
Hanoi,Hanoi,21.03332725,105.8500142,"2,904,635",Vietnam,VN,VNM,Thái Nguyên\
Pyongyang,Pyongyang,39.0194387,125.7546907,"2,899,399",North Korea,KP,PRK,P'yongyang\
Santiago,Santiago,-33.45001382,-70.66704085,"2,883,306",Chile,CL,CHL,Región Metropolitana de Santiago\
Nairobi,Nairobi,-1.283346742,36.81665686,"2,880,274",Kenya,KE,KEN,Nairobi\
Changchun,Changchun,43.86500856,125.3399873,"2,860,211",China,CN,CHN,Jilin\
Cape Town,Cape Town,-33.92001097,18.43498816,"2,823,929",South Africa,ZA,ZAF,Western Cape\
New Taipei,New Taipei,25.01277778,121.465,"2,821,870",Taiwan,TW,TWN,New Taipei City\
Taiyuan,Taiyuan,37.87501243,112.5450577,"2,817,738",China,CN,CHN,Shanxi\
Jaipur,Jaipur,26.92113324,75.80998734,"2,814,379",India,IN,IND,Rajasthan\
Dar es Salaam,Dar es Salaam,-6.800012595,39.26834184,"2,814,326",Tanzania,TZ,TZA,Dar-Es-Salaam\
Madrid,Madrid,40.40002626,-3.683351686,"2,808,719",Spain,ES,ESP,Comunidad de Madrid\
Quezon City,Quezon City,14.6504352,121.0299662,"2,761,720",Philippines,PH,PHL,Metropolitan Manila\
Johannesburg,Johannesburg,-26.17004474,28.03000972,"2,730,735",South Africa,ZA,ZAF,Gauteng\
Durban,Durban,-29.865013,30.98001054,"2,729,000",South Africa,ZA,ZAF,KwaZulu-Natal\
Nagoya,Nagoya,35.15499758,136.9149914,"2,710,640",Japan,JP,JPN,Aichi\
El Giza,El Giza,30.00998863,31.19002356,"2,681,863",Egypt,EG,EGY,Al Jizah\
Algiers,Algiers,36.7630648,3.05055253,"2,665,832",Algeria,DZ,DZA,Alger\
Medellin,Medellin,6.275003274,-75.57501001,"2,648,490",Colombia,CO,COL,Antioquia\
Porto Alegre,Porto Alegre,-30.05001463,-51.20001205,"2,644,871",Brazil,BR,BRA,Rio Grande do Sul\
Surabaya,Surabaya,-7.249235821,112.7508333,"2,609,829",Indonesia,ID,IDN,Jawa Timur\
Dalian,Dalian,38.92283839,121.6298308,"2,601,154",China,CN,CHN,Liaoning\
Lucknow,Lucknow,26.85503908,80.91499874,"2,583,506",India,IN,IND,Uttar Pradesh\
Recife,Recife,-8.075645326,-34.91560551,"2,564,549",Brazil,BR,BRA,Pernambuco\
Faisalabad,Faisalabad,31.40998069,73.10999711,"2,561,798",Pakistan,PK,PAK,Punjab\
Incheon,Incheon,37.47614789,126.6422334,"2,550,000",South Korea,KR,KOR,Inch'on-gwangyoksi\
Dakar,Dakar,14.71583173,-17.47313013,"2,540,200",Senegal,SN,SEN,Dakar\
Boston,Boston,42.32996014,-71.07001367,"2,528,071",United States of America,US,USA,Massachusetts\
Detroit,Detroit,42.32996014,-83.08005579,"2,526,135",United States of America,US,USA,Michigan\
Damascus,Damascus,33.500034,36.29999589,"2,466,000",Syria,SY,SYR,Damascus\
Atlanta,Atlanta,33.83001385,-84.39994938,"2,464,454",United States of America,US,USA,Georgia\
Daegu,Daegu,35.86678876,128.6069714,"2,460,000",South Korea,KR,KOR,Taegu-gwangyoksi\
Izmir,Izmir,38.43614968,27.15179401,"2,454,909",Turkey,TR,TUR,Izmir\
"Washington, D.C.","Washington, D.C.",38.89954938,-77.00941858,"2,445,217",United States of America,US,USA,District of Columbia\
Hangzhou,Hangzhou,30.24997398,120.1700187,"2,442,565",China,CN,CHN,Zhejiang\
Phoenix,Phoenix,33.53997988,-112.0699917,"2,436,023",United States of America,US,USA,Arizona\
Zhangzhou,Zhangzhou,24.52037539,117.6700162,"2,434,800",China,CN,CHN,Fujian\
Jinan,Jinan,36.67498232,116.9950187,"2,433,633",China,CN,CHN,Shandong\
Monterrey,Monterrey,25.66999514,-100.3299848,"2,417,437",Mexico,MX,MEX,Nuevo León\
Guiyang,Guiyang,26.58004295,106.7200386,"2,416,817",China,CN,CHN,Guizhou\
Caracas,Caracas,10.50099855,-66.91703719,"2,400,340",Venezuela,VE,VEN,Distrito Capital\
Nagpur,Nagpur,21.16995974,79.08999385,"2,341,009",India,IN,IND,Maharashtra\
Changsha,Changsha,28.19996991,112.969993,"2,338,969",China,CN,CHN,Hunan\
Zhengzhou,Zhengzhou,34.75499615,113.6650927,"2,325,063",China,CN,CHN,Henan\
Mashhad,Mashhad,36.27001996,59.5699967,"2,318,127",Iran,IR,IRN,Razavi Khorasan\
Curitiba,Curitiba,-25.420013,-49.3199976,"2,291,430",Brazil,BR,BRA,Paraná\
Omdurman,Omdurman,15.61668113,32.48002234,"2,289,429",Sudan,SD,SDN,Khartoum\
Lanzhou,Lanzhou,36.05602785,103.7920003,"2,282,609",China,CN,CHN,Gansu\
Qingdao,Qingdao,36.08997927,120.3300089,"2,254,123",China,CN,CHN,Shandong\
Guayaquil,Guayaquil,-2.220033754,-79.92004195,"2,233,015",Ecuador,EC,ECU,Guayas\
Ibadan,Ibadan,7.380026264,3.929982054,"2,221,285",Nigeria,NG,NGA,Oyo\
Cali,Cali,3.399959126,-76.49996647,"2,216,418",Colombia,CO,COL,Valle del Cauca\
Shijianzhuang,Shijianzhuang,38.05001467,114.4799784,"2,204,737",China,CN,CHN,Hebei\
Sapporo,Sapporo,43.07497927,141.3400443,"2,202,893",Japan,JP,JPN,Hokkaido\
Kiev,Kiev,50.43336733,30.51662797,"2,185,754",Ukraine,UA,UKR,Kiev\
Xiangtan,Xiangtan,27.85043052,112.9000232,"2,183,454",China,CN,CHN,Hunan\
Nanchong,Nanchong,30.78043256,106.1299971,"2,174,000",China,CN,CHN,Sichuan\
Aleppo,Aleppo,36.22997072,37.1700203,"2,170,132",Syria,SY,SYR,Aleppo (Halab)\
Kaohsiung,Kaohsiung,22.63330711,120.2666019,"2,144,392",Taiwan,TW,TWN,Kaohsiung City\
Jilin,Jilin,43.84997072,126.5500427,"2,138,989",China,CN,CHN,Jilin\
Melbourne,Melbourne,-37.82003131,144.9750162,"2,131,813",Australia,AU,AUS,Victoria\
Milan,Milan,45.4699752,9.20500891,"2,125,831",Italy,IT,ITA,Lombardia\
Nanchang,Nanchang,28.67999229,115.8799963,"2,110,676",China,CN,CHN,Jiangxi\
Fukuoka,Fukuoka,33.59501528,130.4100138,"2,092,145",Japan,JP,JPN,Fukuoka\
San Francisco,San Francisco,37.74000775,-122.4599777,"2,091,036",United States of America,US,USA,California\
Havana,Havana,23.13195884,-82.36418217,"2,082,459",Cuba,CU,CUB,Ciudad de la Habana\
Tashkent,Tashkent,41.31170188,69.29493282,"2,081,014",Uzbekistan,UZ,UZB,Tashkent\
Vienna,Vienna,48.20001528,16.36663896,"2,065,500",Austria,AT,AUT,Wien\
Bandung,Bandung,-6.950029278,107.5700126,"2,046,860",Indonesia,ID,IDN,Jawa Barat\
Accra,Accra,5.550034606,-0.21671574,"2,042,132",Ghana,GH,GHA,Greater Accra\
Baku,Baku,40.39527203,49.86221716,"2,007,150",Azerbaijan,AZ,AZE,Baki\
Athens,Athens,37.98332623,23.73332108,"1,985,569",Greece,GR,GRC,Attiki\
Kunming,Kunming,25.06998008,102.6799751,"1,977,337",China,CN,CHN,Yunnan\
Suzhou,Suzhou,33.6361111,116.9788889,"1,964,000",China,CN,CHN,Anhui\
Bekasi,Bekasi,-6.217257468,106.972323,"1,949,165",Indonesia,ID,IDN,Jakarta Raya\
San Diego,San Diego,32.82002382,-117.1799899,"1,938,571",United States of America,US,USA,California\
Medan,Medan,3.579973978,98.65004024,"1,932,986",Indonesia,ID,IDN,Sumatera Utara\
Indore,Indore,22.71505922,75.86502274,"1,931,521",India,IN,IND,Madhya Pradesh\
Denver,Denver,39.73918805,-104.984016,"1,930,800",United States of America,US,USA,Colorado\
Sanaa,Sanaa,15.3547333,44.20659338,"1,921,927",Yemen,YE,YEM,Amanat Al Asimah\
Campinas,Campinas,-22.90001178,-47.10002975,"1,911,277",Brazil,BR,BRA,São Paulo\
Fuzhou,Fuzhou,26.07999595,119.3000459,"1,892,860",China,CN,CHN,Fujian\
Patna,Patna,25.62495913,85.13003861,"1,878,960",India,IN,IND,Bihar\
Zibo,Zibo,36.79998761,118.049993,"1,865,385",China,CN,CHN,Shandong\
Saidu,Saidu,34.75003522,72.34999182,"1,860,310",Pakistan,PK,PAK,N.W.F.P.\
Santa Cruz,Santa Cruz,-17.75391762,-63.22599634,"1,859,531",Bolivia,BO,BOL,Santa Cruz\
Bucharest,Bucharest,44.4333718,26.09994665,"1,842,097",Romania,RO,ROU,Bucharest\
Taichung,Taichung,24.15207745,120.681667,"1,835,024",Taiwan,TW,TWN,Taichung City\
Urumqi,Urumqi,43.80501223,87.57500565,"1,829,613",China,CN,CHN,Xinjiang Uygur\
Seattle,Seattle,47.57000205,-122.339985,"1,821,685",United States of America,US,USA,Washington\
Rawalpindi,Rawalpindi,33.59997622,73.04002722,"1,800,551",Pakistan,PK,PAK,Punjab\
Benoni,Benoni,-26.14958087,28.32993974,"1,795,672",South Africa,ZA,ZAF,Gauteng\
Puebla,Puebla,19.04995994,-98.20003727,"1,793,550",Mexico,MX,MEX,Puebla\
Belem,Belem,-1.450003236,-48.48002303,"1,787,369",Brazil,BR,BRA,Pará\
Frankfurt,Frankfurt,50.09997683,8.67501542,"1,787,332",Germany,DE,DEU,Hessen\
Beirut,Beirut,33.87197512,35.50970821,"1,779,063",Lebanon,LB,LBN,Beirut\
Stuttgart,Stuttgart,48.77997988,9.199996296,"1,775,644",Germany,DE,DEU,Baden-Württemberg\
Shuyang,Shuyang,34.12986635,118.7733597,"1,770,000",China,CN,CHN,Jiangsu\
Maracaibo,Maracaibo,10.72997683,-71.65997766,"1,764,650",Venezuela,VE,VEN,Zulia\
Hamburg,Hamburg,53.55002464,9.999999144,"1,748,059",Germany,DE,DEU,Hamburg\
Tel Aviv-Yafo,Tel Aviv-Yafo,32.07999147,34.77001176,"1,745,179",Israel,IL,ISR,Tel Aviv\
Tangshan,Tangshan,39.62433718,118.194377,"1,737,975",China,CN,CHN,Hebei\
Hefei,Hefei,31.85003135,117.2800142,"1,711,952",China,CN,CHN,Anhui\
Warsaw,Warsaw,52.25000063,20.99999955,"1,704,570",Poland,PL,POL,Masovian\
Minsk,Minsk,53.89997744,27.56662716,"1,691,069",Belarus,BY,BLR,Minsk\
Rome,Rome,41.89595563,12.48325842,"1,687,226",Italy,IT,ITA,Lazio\
Rabat,Rabat,34.02529909,-6.83613082,"1,680,377",Morocco,MA,MAR,Rabat - Salé - Zemmour - Zaer\
Wanzhou,Wanxian,30.81999086,108.4000394,"1,680,000",China,CN,CHN,Chongqing\
Budapest,Budapest,47.50000633,19.08332068,"1,679,000",Hungary,HU,HUN,Budapest\
Lisbon,Lisbon,38.72272288,-9.144866305,"1,664,901",Portugal,PT,PRT,Lisboa\
Bhopal,Bhopal,23.24998781,77.40999304,"1,663,457",India,IN,IND,Madhya Pradesh\
Xuzhou,Xuzhou,34.28001223,117.1800203,"1,645,097",China,CN,CHN,Jiangsu\
Sendai,Sendai,38.28710614,141.0217175,"1,643,781",Japan,JP,JPN,Miyagi\
Manaus,Manaus,-3.100031719,-60.00001754,"1,636,622",Brazil,BR,BRA,Amazonas'.split('\n').map(row => row.split(','));
