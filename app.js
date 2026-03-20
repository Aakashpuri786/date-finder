// ============================================================
//  DATA FROM ideas.sql  –  table: money
// ============================================================
const moneyData = [
  { sn: 1, notes: 1000, symbols: '070802', date: '2070-08-02' },
  { sn: 2, notes: 1000, symbols: '022315', date: '2022-03-15' },
  { sn: 3, notes: 1000, symbols: '660813', date: '2066-08-13' },
  { sn: 4, notes: 500, symbols: '640520', date: '2064-05-20' },
  { sn: 5, notes: 500, symbols: '820518', date: '2082-05-18' },
  { sn: 6, notes: 500, symbols: '670705', date: '2067-07-05' },
  { sn: 7, notes: 500, symbols: '058614', date: '2058-06-14' },
  { sn: 8, notes: 100, symbols: '660616', date: '2066-06-16' },
  { sn: 9, notes: 100, symbols: '321030', date: '2032-10-30' },
  { sn: 10, notes: 100, symbols: '800101', date: '2080-01-01' },
  { sn: 11, notes: 100, symbols: '014305', date: '2014-03-05' },
  { sn: 12, notes: 100, symbols: '032515', date: '2032-05-15' },
  { sn: 13, notes: 100, symbols: '380620', date: '2038-06-20' },
  { sn: 14, notes: 100, symbols: '560615', date: '2056-06-15' },
  { sn: 15, notes: 100, symbols: '671108', date: '2067-11-08' },
  { sn: 16, notes: 100, symbols: '065527', date: '2006-05-27' },
  { sn: 17, notes: 100, symbols: '481118', date: '2048-11-18' },
  { sn: 18, notes: 100, symbols: '023113', date: '2023-01-13' },
  { sn: 19, notes: 100, symbols: '041424', date: '2041-04-24' },
  { sn: 20, notes: 100, symbols: '084427', date: '2084-04-27' },
  { sn: 21, notes: 100, symbols: '360315', date: '2036-03-15' },
  { sn: 22, notes: 100, symbols: '066605', date: '2066-06-05' },
  { sn: 23, notes: 100, symbols: '661204', date: '2066-12-04' },
  { sn: 24, notes: 100, symbols: '650046', date: '2065-04-06' },
  { sn: 25, notes: 50, symbols: '630614', date: '2063-06-14' },
  { sn: 26, notes: 50, symbols: '380524', date: '2038-05-24' },
  { sn: 27, notes: 50, symbols: '054411', date: '2054-04-11' },
  { sn: 28, notes: 50, symbols: '065608', date: '2065-06-08' },
  { sn: 29, notes: 50, symbols: '721002', date: '0000-00-00' },
  { sn: 30, notes: 50, symbols: '045407', date: '2045-04-07' },
  { sn: 31, notes: 50, symbols: '660513', date: '2066-05-13' },
  { sn: 32, notes: 50, symbols: '083202', date: '2083-02-02' },
  { sn: 33, notes: 50, symbols: '810305', date: '2081-03-05' },
  { sn: 34, notes: 50, symbols: '551024', date: '2055-10-24' },
  { sn: 35, notes: 20, symbols: '570303', date: '2057-03-03' },
  { sn: 36, notes: 20, symbols: '311106', date: '2031-11-06' },
  { sn: 37, notes: 20, symbols: '040704', date: '2004-07-04' },
  { sn: 38, notes: 20, symbols: '240606', date: '2024-06-06' },
  { sn: 39, notes: 20, symbols: '460605', date: '2046-06-05' },
  { sn: 40, notes: 20, symbols: '810804', date: '2081-08-04' },
  { sn: 41, notes: 20, symbols: '006063', date: '2006-06-03' },
  { sn: 42, notes: 20, symbols: '056311', date: '2056-03-11' },
  { sn: 43, notes: 20, symbols: '741023', date: '2074-10-23' },
  { sn: 44, notes: 20, symbols: '660322', date: '2066-03-22' },
  { sn: 45, notes: 20, symbols: '060806', date: '2006-08-06' },
  { sn: 46, notes: 20, symbols: '450806', date: '2045-08-06' },
  { sn: 47, notes: 20, symbols: '550830', date: '2055-08-30' },
  { sn: 48, notes: 20, symbols: '570812', date: '2057-08-12' },
  { sn: 49, notes: 20, symbols: '084224', date: '2084-02-24' },
  { sn: 50, notes: 20, symbols: '570727', date: '2057-07-27' },
  { sn: 51, notes: 20, symbols: '010706', date: '2001-07-06' },
  { sn: 52, notes: 20, symbols: '065815', date: '2065-08-15' },
  { sn: 53, notes: 20, symbols: '651225', date: '2065-12-25' },
  { sn: 54, notes: 20, symbols: '068317', date: '2068-03-17' },
  { sn: 55, notes: 20, symbols: '380828', date: '2038-08-28' },
  { sn: 56, notes: 20, symbols: '630615', date: '2063-06-15' },
  { sn: 57, notes: 20, symbols: '064232', date: '0000-00-00' },
  { sn: 58, notes: 20, symbols: '063036', date: '2063-03-06' },
  { sn: 59, notes: 20, symbols: '660826', date: '2066-08-26' },
  { sn: 60, notes: 20, symbols: '062062', date: '2062-06-02' },
  { sn: 61, notes: 20, symbols: '740626', date: '2074-06-26' },
  { sn: 62, notes: 20, symbols: '160326', date: '2016-03-26' },
  { sn: 63, notes: 20, symbols: '350731', date: '2035-07-31' },
  { sn: 64, notes: 10, symbols: '040208', date: '2004-02-08' },
  { sn: 65, notes: 10, symbols: '540416', date: '2054-04-16' },
  { sn: 66, notes: 10, symbols: '301203', date: '2030-12-03' },
  { sn: 67, notes: 10, symbols: '085124', date: '2085-01-24' },
  { sn: 68, notes: 10, symbols: '051726', date: '2051-07-26' },
  { sn: 69, notes: 10, symbols: '720506', date: '2072-05-06' },
  { sn: 70, notes: 10, symbols: '065608', date: '2065-06-08' },
  { sn: 71, notes: 10, symbols: '670510', date: '2067-05-10' },
  { sn: 72, notes: 10, symbols: '062106', date: '2062-01-06' },
  { sn: 73, notes: 10, symbols: '661127', date: '2066-11-27' },
  { sn: 74, notes: 10, symbols: '060104', date: '2060-01-04' },
  { sn: 75, notes: 10, symbols: '761014', date: '2076-10-14' },
  { sn: 76, notes: 10, symbols: '720803', date: '2072-08-03' },
  { sn: 77, notes: 10, symbols: '600601', date: '2060-06-01' },
  { sn: 78, notes: 10, symbols: '740815', date: '2074-08-15' },
  { sn: 79, notes: 10, symbols: '770114', date: '2077-01-14' },
  { sn: 80, notes: 10, symbols: '040013', date: '2040-01-03' },
  { sn: 81, notes: 10, symbols: '110618', date: '2011-06-18' },
  { sn: 82, notes: 10, symbols: '015317', date: '2015-03-17' },
  { sn: 83, notes: 10, symbols: '050806', date: '2005-08-06' },
  { sn: 84, notes: 10, symbols: '261206', date: '2026-12-06' },
  { sn: 85, notes: 10, symbols: '060627', date: '2060-06-27' },
  { sn: 86, notes: 10, symbols: '660315', date: '2066-03-15' },
  { sn: 87, notes: 10, symbols: '760612', date: '2076-06-12' },
  { sn: 88, notes: 10, symbols: '110503', date: '2011-05-03' },
  { sn: 89, notes: 10, symbols: '630611', date: '2063-06-11' },
  { sn: 90, notes: 10, symbols: '671126', date: '2067-11-26' },
  { sn: 91, notes: 10, symbols: '810704', date: '2081-07-04' },
  { sn: 92, notes: 10, symbols: '600115', date: '2060-01-15' },
  { sn: 93, notes: 10, symbols: '110517', date: '2011-05-17' },
  { sn: 94, notes: 10, symbols: '820611', date: '2082-06-11' },
  { sn: 95, notes: 10, symbols: '740312', date: '2074-03-12' },
  { sn: 96, notes: 10, symbols: '021807', date: '2021-08-07' },
  { sn: 97, notes: 10, symbols: '620110', date: '2062-01-10' },
  { sn: 98, notes: 10, symbols: '541013', date: '2054-10-13' },
  { sn: 99, notes: 10, symbols: '017213', date: '2017-02-13' },
  { sn: 100, notes: 10, symbols: '401113', date: '2040-11-13' },
  { sn: 101, notes: 10, symbols: '260105', date: '2026-01-05' },
  { sn: 102, notes: 10, symbols: '220816', date: '2022-08-16' },
  { sn: 103, notes: 5, symbols: '110511', date: '2011-05-11' },
  { sn: 104, notes: 5, symbols: '071323', date: '2071-03-23' },
  { sn: 105, notes: 5, symbols: '530065', date: '2053-06-05' },
  { sn: 106, notes: 5, symbols: '560051', date: '2056-05-01' },
  { sn: 107, notes: 5, symbols: '021018', date: '2021-01-08' },
  { sn: 108, notes: 5, symbols: '064025', date: '2064-02-05' },
  { sn: 109, notes: 5, symbols: '051603', date: '2051-06-03' },
  { sn: 110, notes: 5, symbols: '620316', date: '2062-03-16' },
  { sn: 111, notes: 5, symbols: '016507', date: '2016-05-07' },
  { sn: 112, notes: 5, symbols: '012511', date: '2001-02-11' },
  { sn: 113, notes: 5, symbols: '651131', date: '0000-00-00' },
  { sn: 114, notes: 5, symbols: '055326', date: '2055-03-26' },
  { sn: 115, notes: 5, symbols: '066426', date: '2066-04-26' },
  { sn: 116, notes: 5, symbols: '071621', date: '2071-06-21' },
  { sn: 117, notes: 5, symbols: '075208', date: '2075-02-08' },
  { sn: 118, notes: 5, symbols: '561112', date: '2056-11-12' },
  { sn: 119, notes: 5, symbols: '600525', date: '2060-05-25' },
  { sn: 120, notes: 5, symbols: '660603', date: '2066-06-03' },
  { sn: 121, notes: 5, symbols: '701125', date: '2070-11-25' },
  { sn: 122, notes: 5, symbols: '810206', date: '2081-02-06' },
  { sn: 123, notes: 5, symbols: '780125', date: '2078-01-25' },
  { sn: 124, notes: 5, symbols: '810202', date: '2081-02-02' },
  { sn: 125, notes: 5, symbols: '770513', date: '2077-05-13' },
  { sn: 126, notes: 5, symbols: '751126', date: '2075-11-26' },
  { sn: 127, notes: 5, symbols: '820106', date: '2082-01-06' },
  { sn: 128, notes: 5, symbols: '620616', date: '2062-06-16' },
  { sn: 129, notes: 5, symbols: '750111', date: '2075-01-11' },
  { sn: 130, notes: 5, symbols: '300324', date: '2030-03-24' },
  { sn: 131, notes: 5, symbols: '461104', date: '2046-11-04' },
  { sn: 132, notes: 5, symbols: '350705', date: '2035-07-05' },
  { sn: 133, notes: 5, symbols: '770816', date: '2077-08-16' },
  { sn: 134, notes: 5, symbols: '150701', date: '2015-07-01' },
  { sn: 135, notes: 5, symbols: '200501', date: '2020-05-01' },
  { sn: 136, notes: 5, symbols: '030618', date: '2003-06-18' },
  { sn: 137, notes: 5, symbols: '820615', date: '2082-06-15' },
  { sn: 138, notes: 1000, symbols: '660813', date: '2066-08-13' },
  { sn: 139, notes: 1000, symbols: '700525', date: '2070-05-25' },
  { sn: 140, notes: 1000, symbols: '052033', date: '2052-03-03' },
  { sn: 141, notes: 500, symbols: '028407', date: '2028-04-07' },
  { sn: 142, notes: 500, symbols: '440310', date: '2044-03-10' },
  { sn: 143, notes: 500, symbols: '680414', date: '2068-04-14' },
  { sn: 144, notes: 500, symbols: '042806', date: '2042-08-06' },
  { sn: 145, notes: 100, symbols: '037401', date: '2037-04-01' },
  { sn: 146, notes: 100, symbols: '003804', date: '2003-08-04' },
  { sn: 147, notes: 100, symbols: '341121', date: '2034-11-21' },
  { sn: 148, notes: 100, symbols: '005402', date: '2005-04-02' },
  { sn: 149, notes: 100, symbols: '064702', date: '2064-07-02' },
  { sn: 150, notes: 100, symbols: '067608', date: '2067-06-08' },
  { sn: 151, notes: 100, symbols: '066610', date: '2066-06-10' },
  { sn: 152, notes: 100, symbols: '661012', date: '2066-10-12' },
  { sn: 153, notes: 100, symbols: '078011', date: '2078-01-01' },
  { sn: 154, notes: 100, symbols: '075028', date: '2075-02-08' },
  { sn: 155, notes: 100, symbols: '018728', date: '2018-07-28' },
  { sn: 156, notes: 100, symbols: '130407', date: '2013-04-07' },
  { sn: 157, notes: 100, symbols: '067813', date: '2067-08-13' },
  { sn: 158, notes: 100, symbols: '740313', date: '2074-03-13' },
  { sn: 159, notes: 100, symbols: '033811', date: '2033-08-11' },
  { sn: 160, notes: 100, symbols: '016627', date: '2016-06-27' },
  { sn: 161, notes: 100, symbols: '851026', date: '2085-10-26' },
  { sn: 162, notes: 100, symbols: '044610', date: '2044-06-10' },
  { sn: 163, notes: 100, symbols: '460625', date: '2046-06-25' },
  { sn: 164, notes: 100, symbols: '085716', date: '2085-07-16' },
  { sn: 165, notes: 100, symbols: '610606', date: '2061-06-06' },
  { sn: 166, notes: 100, symbols: '040068', date: '2040-06-08' },
  { sn: 167, notes: 100, symbols: '076046', date: '2076-04-06' },
  { sn: 168, notes: 100, symbols: '430516', date: '2043-05-16' },
  { sn: 169, notes: 100, symbols: '660613', date: '2066-06-13' },
  { sn: 170, notes: 100, symbols: '431011', date: '2043-10-11' },
  { sn: 171, notes: 100, symbols: '065213', date: '2065-02-13' },
  { sn: 172, notes: 100, symbols: '030824', date: '2030-08-24' },
  { sn: 173, notes: 100, symbols: '071124', date: '2071-01-24' },
  { sn: 174, notes: 100, symbols: '380402', date: '2038-04-02' },
  { sn: 175, notes: 100, symbols: '710127', date: '2071-01-27' },
  { sn: 176, notes: 100, symbols: '086522', date: '2086-05-22' },
  { sn: 177, notes: 100, symbols: '250110', date: '2025-01-10' },
  { sn: 178, notes: 100, symbols: '400511', date: '2040-05-11' },
  { sn: 179, notes: 100, symbols: '064614', date: '2064-06-14' },
  { sn: 180, notes: 100, symbols: '064203', date: '2064-02-03' },
  { sn: 181, notes: 100, symbols: '056103', date: '2056-01-03' },
  { sn: 182, notes: 100, symbols: '630802', date: '2063-08-02' },
  { sn: 183, notes: 100, symbols: '480516', date: '2048-05-16' },
  { sn: 184, notes: 100, symbols: '002618', date: '2002-06-18' },
  { sn: 185, notes: 100, symbols: '331121', date: '2033-11-21' },
  { sn: 186, notes: 100, symbols: '240331', date: '2024-03-31' },
  { sn: 187, notes: 100, symbols: '470716', date: '2047-07-16' },
  { sn: 188, notes: 100, symbols: '170822', date: '2017-08-22' },
  { sn: 189, notes: 50, symbols: '051406', date: '2051-04-06' },
  { sn: 190, notes: 50, symbols: '260510', date: '2026-05-10' },
  { sn: 191, notes: 50, symbols: '012505', date: '2012-05-05' },
  { sn: 192, notes: 50, symbols: '130506', date: '2013-05-06' },
  { sn: 193, notes: 50, symbols: '071405', date: '2071-04-05' },
  { sn: 194, notes: 50, symbols: '451015', date: '2045-10-15' },
  { sn: 195, notes: 50, symbols: '062331', date: '2062-03-31' },
  { sn: 196, notes: 50, symbols: '380322', date: '2038-03-22' },
  { sn: 197, notes: 50, symbols: '580304', date: '2058-03-04' },
  { sn: 198, notes: 50, symbols: '370622', date: '2037-06-22' },
  { sn: 199, notes: 50, symbols: '003126', date: '2003-01-26' },
  { sn: 200, notes: 50, symbols: '630431', date: '2063-05-01' },
  { sn: 201, notes: 50, symbols: '211213', date: '2021-12-13' },
  { sn: 202, notes: 50, symbols: '670318', date: '2067-03-18' },
  { sn: 203, notes: 50, symbols: '670424', date: '2067-04-24' },
  { sn: 204, notes: 50, symbols: '400423', date: '2040-04-23' },
  { sn: 205, notes: 50, symbols: '230605', date: '2023-06-05' },
  { sn: 206, notes: 50, symbols: '650434', date: '2065-04-04' },
  { sn: 207, notes: 50, symbols: '040035', date: '2040-03-05' },
  { sn: 208, notes: 50, symbols: '660624', date: '2066-06-24' },
  { sn: 209, notes: 50, symbols: '430614', date: '2043-06-14' },
  { sn: 210, notes: 50, symbols: '018406', date: '2018-04-06' },
  { sn: 211, notes: 50, symbols: '070063', date: '2070-06-03' },
  { sn: 212, notes: 50, symbols: '360203', date: '2036-02-03' },
  { sn: 213, notes: 50, symbols: '023042', date: '2023-04-02' },
  { sn: 214, notes: 50, symbols: '840614', date: '2084-06-14' },
  { sn: 215, notes: 50, symbols: '121020', date: '2012-10-20' },
  { sn: 216, notes: 50, symbols: '250116', date: '2025-01-16' },
  { sn: 217, notes: 50, symbols: '006508', date: '2006-05-08' },
  { sn: 218, notes: 50, symbols: '013631', date: '2013-06-13' },
  { sn: 219, notes: 50, symbols: '630426', date: '2063-04-26' },
  { sn: 220, notes: 50, symbols: '023708', date: '2023-07-08' },
  { sn: 221, notes: 50, symbols: '640404', date: '2064-04-04' },
  { sn: 222, notes: 50, symbols: '280104', date: '2028-01-04' },
  { sn: 223, notes: 20, symbols: '610225', date: '2061-02-25' },
  { sn: 224, notes: 20, symbols: '600404', date: '2060-04-04' },
  { sn: 225, notes: 20, symbols: '048427', date: '2048-04-27' },
  { sn: 226, notes: 20, symbols: '077614', date: '2077-06-14' },
  { sn: 227, notes: 20, symbols: '400216', date: '2040-02-16' },
  { sn: 228, notes: 20, symbols: '035728', date: '2035-07-28' },
  { sn: 229, notes: 20, symbols: '070616', date: '2070-06-16' },
  { sn: 230, notes: 20, symbols: '130120', date: '2013-01-20' },
  { sn: 231, notes: 20, symbols: '300426', date: '2030-04-26' },
  { sn: 232, notes: 20, symbols: '068614', date: '2068-06-14' },
  { sn: 233, notes: 20, symbols: '050728', date: '2050-07-28' },
  { sn: 234, notes: 20, symbols: '620616', date: '2062-06-16' },
  { sn: 235, notes: 20, symbols: '022026', date: '2022-02-06' },
  { sn: 236, notes: 20, symbols: '048224', date: '2048-02-24' },
  { sn: 237, notes: 20, symbols: '160102', date: '2016-01-02' },
  { sn: 238, notes: 20, symbols: '067626', date: '2067-06-26' },
  { sn: 239, notes: 20, symbols: '032111', date: '2032-01-11' },
  { sn: 240, notes: 20, symbols: '044424', date: '2044-04-24' },
  { sn: 241, notes: 20, symbols: '550818', date: '2055-08-18' },
  { sn: 242, notes: 20, symbols: '620731', date: '2062-07-31' },
  { sn: 243, notes: 20, symbols: '320406', date: '2032-04-06' },
  { sn: 244, notes: 20, symbols: '110105', date: '2011-01-05' },
  { sn: 245, notes: 20, symbols: '068314', date: '2068-03-14' },
  { sn: 246, notes: 20, symbols: '460301', date: '2046-03-01' },
  { sn: 247, notes: 20, symbols: '280713', date: '2028-07-13' },
  { sn: 248, notes: 20, symbols: '420507', date: '2042-05-07' },
  { sn: 249, notes: 20, symbols: '650803', date: '2065-08-03' },
  { sn: 250, notes: 20, symbols: '210717', date: '2021-07-17' },
  { sn: 251, notes: 20, symbols: '033624', date: '2033-06-24' },
  { sn: 252, notes: 20, symbols: '071014', date: '2071-10-14' },
  { sn: 253, notes: 20, symbols: '320116', date: '2032-01-16' },
  { sn: 254, notes: 10, symbols: '052502', date: '2052-05-02' },
  { sn: 255, notes: 10, symbols: '065065', date: '2065-06-05' },
  { sn: 256, notes: 10, symbols: '300517', date: '2030-05-17' },
  { sn: 257, notes: 10, symbols: '024811', date: '2024-08-11' },
  { sn: 258, notes: 10, symbols: '670233', date: '2067-03-05' },
  { sn: 259, notes: 10, symbols: '047330', date: '2047-03-30' },
  { sn: 260, notes: 10, symbols: '075511', date: '2075-05-11' },
  { sn: 261, notes: 10, symbols: '015313', date: '2015-03-13' },
  { sn: 262, notes: 10, symbols: '037331', date: '2037-03-31' },
  { sn: 263, notes: 10, symbols: '670616', date: '2067-06-16' },
  { sn: 264, notes: 10, symbols: '631201', date: '2063-12-01' },
  { sn: 265, notes: 10, symbols: '740431', date: '2074-05-01' },
  { sn: 266, notes: 10, symbols: '210704', date: '2021-07-04' },
  { sn: 267, notes: 10, symbols: '076027', date: '2076-02-07' },
  { sn: 268, notes: 10, symbols: '800606', date: '2080-06-06' },
  { sn: 269, notes: 10, symbols: '120607', date: '2012-06-07' },
  { sn: 270, notes: 10, symbols: '086626', date: '2086-06-26' },
  { sn: 271, notes: 10, symbols: '241003', date: '2024-10-03' },
  { sn: 272, notes: 10, symbols: '050304', date: '2050-03-04' },
  { sn: 273, notes: 10, symbols: '023824', date: '2023-08-24' },
  { sn: 274, notes: 10, symbols: '032610', date: '2032-06-10' },
  { sn: 275, notes: 10, symbols: '047115', date: '2047-01-15' },
  { sn: 276, notes: 10, symbols: '820627', date: '2082-06-27' },
  { sn: 277, notes: 10, symbols: '631205', date: '2063-12-05' },
  { sn: 278, notes: 10, symbols: '042820', date: '2042-08-20' },
  { sn: 279, notes: 10, symbols: '076612', date: '2076-06-12' },
  { sn: 280, notes: 10, symbols: '660203', date: '2066-02-03' },
  { sn: 281, notes: 10, symbols: '431010', date: '2043-10-10' },
  { sn: 282, notes: 10, symbols: '067062', date: '2067-06-02' },
  { sn: 283, notes: 10, symbols: '820310', date: '2082-03-10' },
  { sn: 284, notes: 10, symbols: '071302', date: '2071-03-02' },
  { sn: 285, notes: 10, symbols: '086053', date: '2086-05-03' },
  { sn: 286, notes: 10, symbols: '007515', date: '2007-05-15' },
  { sn: 287, notes: 5, symbols: '421013', date: '2042-10-13' },
  { sn: 288, notes: 5, symbols: '560631', date: '2056-07-01' },
  { sn: 289, notes: 5, symbols: '660316', date: '2066-03-16' },
  { sn: 290, notes: 5, symbols: '360716', date: '2036-07-16' },
  { sn: 291, notes: 5, symbols: '321108', date: '2032-11-08' },
  { sn: 292, notes: 5, symbols: '160711', date: '2016-07-11' },
  { sn: 293, notes: 5, symbols: '670226', date: '2067-02-26' },
  { sn: 294, notes: 5, symbols: '001047', date: '2001-04-07' },
  { sn: 295, notes: 5, symbols: '830202', date: '2083-02-02' },
  { sn: 296, notes: 5, symbols: '015418', date: '2015-04-18' },
  { sn: 297, notes: 5, symbols: '870618', date: '2087-06-18' },
  { sn: 298, notes: 5, symbols: '063330', date: '2063-03-30' },
  { sn: 299, notes: 5, symbols: '060524', date: '2060-05-24' },
  { sn: 300, notes: 5, symbols: '083126', date: '2083-01-26' },
  { sn: 301, notes: 5, symbols: '811030', date: '2081-10-30' },
  { sn: 302, notes: 5, symbols: '240508', date: '2024-05-08' },
  { sn: 303, notes: 5, symbols: '661017', date: '2066-10-17' },
  { sn: 304, notes: 5, symbols: '231213', date: '2023-12-13' },
  { sn: 305, notes: 5, symbols: '076503', date: '2076-05-03' },
  { sn: 306, notes: 5, symbols: '056112', date: '2056-01-12' },
  { sn: 307, notes: 5, symbols: '660432', date: '2066-05-02' },
  { sn: 308, notes: 5, symbols: '020034', date: '2020-03-04' },
  { sn: 309, notes: 5, symbols: '062706', date: '2062-07-06' },
  { sn: 310, notes: 5, symbols: '681123', date: '2068-11-23' },
  { sn: 311, notes: 5, symbols: '048512', date: '2004-08-12' },
  { sn: 312, notes: 5, symbols: '650632', date: '2065-07-02' },
  { sn: 313, notes: 5, symbols: '068522', date: '2068-05-22' },
  { sn: 314, notes: 5, symbols: '014606', date: '2014-06-06' },
  { sn: 315, notes: 5, symbols: '341023', date: '2034-10-23' },
  { sn: 316, notes: 5, symbols: '060121', date: '2060-01-21' },
  { sn: 317, notes: 5, symbols: '077707', date: '2077-07-07' },
  { sn: 318, notes: 5, symbols: '004316', date: '2004-03-16' },
  { sn: 319, notes: 5, symbols: '067412', date: '2067-04-12' },
  { sn: 320, notes: 5, symbols: '053620', date: '2053-06-20' },
  { sn: 321, notes: 5, symbols: '056718', date: '2056-07-18' },
  { sn: 322, notes: 5, symbols: '810721', date: '2081-07-21' },
  { sn: 323, notes: 5, symbols: '046421', date: '2046-04-21' },
  { sn: 324, notes: 5, symbols: '780227', date: '2078-02-27' },
  { sn: 325, notes: 5, symbols: '072316', date: '2072-03-16' },
  { sn: 326, notes: 5, symbols: '016027', date: '2016-02-07' },
];

// ============================================================
//  SEARCH MODE DETECTION
//  Returns { mode, label, filter } or null if invalid
// ============================================================
function parseSearchInput(raw) {
  const s = raw.trim();

  // YYYY-MM-DD  or  YYYY/MM/DD  – full exact date
  if (/^\d{4}[-\/]\d{2}[-\/]\d{2}$/.test(s)) {
    const [y, m, d] = s.split(/[-\/]/);
    const date = `${y}-${m}-${d}`;
    return {
      mode: 'EXACT DATE',
      label: `exact date ${date}`,
      filter: r => r.date === date
    };
  }

  // YYYY-MM or YYYY/MM – year + month
  if (/^\d{4}[-\/]\d{1,2}$/.test(s)) {
    const [y, m] = s.split(/[-\/]/);
    const mm = m.padStart(2, '0');
    return {
      mode: 'YEAR + MONTH',
      label: `year ${y}, month ${mm}`,
      filter: r => r.date.startsWith(`${y}-${mm}`)
    };
  }

  // MM-DD or MM/DD – month + day only
  if (/^\d{1,2}[-\/]\d{1,2}$/.test(s)) {
    const [m, d] = s.split(/[-\/]/);
    const mm = m.padStart(2, '0');
    const dd = d.padStart(2, '0');
    return {
      mode: 'MONTH + DAY',
      label: `month ${mm}, day ${dd}`,
      filter: r => r.date.slice(5, 7) === mm && r.date.slice(8, 10) === dd
    };
  }

  // Pure 4-digit number → YEAR
  if (/^\d{4}$/.test(s)) {
    return {
      mode: 'YEAR',
      label: `year ${s}`,
      filter: r => r.date.startsWith(s + '-')
    };
  }

  // 1-2 digit number (1-12) → MONTH
  if (/^\d{1,2}$/.test(s)) {
    const v = parseInt(s, 10);
    if (v < 1 || v > 12) return null;
    const mm = String(v).padStart(2, '0');
    return {
      mode: 'MONTH',
      label: `month ${mm}`,
      filter: r => r.date.slice(5, 7) === mm
    };
  }

  // "day:DD" or "d:DD" → DAY
  if (/^(day|d):(\d{1,2})$/i.test(s)) {
    const dd = s.replace(/^(day|d):/i, '').padStart(2, '0');
    return {
      mode: 'DAY',
      label: `day ${dd}`,
      filter: r => r.date.slice(8, 10) === dd
    };
  }

  return null;
}

// hint that updates live as user types
function updateModeHint() {
  const s = document.getElementById('searchInput').value.trim();
  const hint = document.getElementById('modeHint');
  if (!s) { hint.textContent = ''; return; }
  const parsed = parseSearchInput(s);
  if (parsed) {
    hint.textContent = `⟶ MODE: ${parsed.mode} — searching ${parsed.label}`;
  } else {
    hint.textContent = '⟶ Type: YYYY, MM, YYYY/MM, MM/DD, YYYY/MM/DD, or day:DD';
  }
}

// ============================================================
//  MAIN SEARCH
// ============================================================
function doSearch(e) {
  if (e) e.preventDefault();
  const raw = document.getElementById('searchInput').value;
  const resultBox = document.getElementById('resultBox');
  resultBox.innerHTML = '';

  if (!raw.trim()) return;

  const parsed = parseSearchInput(raw.trim());
  if (!parsed) {
    resultBox.innerHTML = errorBox('❌ UNRECOGNISED FORMAT — Try: YYYY · MM · YYYY/MM · MM/DD · YYYY/MM/DD · day:DD');
    return;
  }

  const found = moneyData.filter(parsed.filter);

  if (found.length === 0) {
    resultBox.innerHTML = `
      ${errorBox(`❌ NO RECORDS — ${parsed.label.toUpperCase()}`)}
      <div class="save-box">
        <div class="save-label">// SAVE SEARCH LOG</div>
        <input id="saveName" class="save-input" type="text" placeholder="Enter your name..." />
        <button class="btn-save" onclick="doSave('${parsed.label}')">Save to History</button>
        <div id="saveMsg"></div>
      </div>`;
    return;
  }

  const total = found.reduce((s, r) => s + r.notes, 0);
  const rows = found.map(r => `
    <tr>
      <td>${r.sn}</td>
      <td>Rs. ${r.notes}</td>
      <td>${r.symbols}</td>
      <td>${r.date}</td>
    </tr>`).join('');

  resultBox.innerHTML = `
    <div class="result-header">
      <span class="result-title">// RESULTS</span>
      <span class="result-badge">[${parsed.mode}] &mdash; ${parsed.label} &mdash; ${found.length} record(s)</span>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>S.N.</th><th>Notes (Rs.)</th><th>Symbol</th><th>Date</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
        <tfoot>
          <tr>
            <td colspan="1" style="text-align:right;">TOTAL</td>
            <td><b>Rs. ${total.toLocaleString()}</b></td>
            <td colspan="2">${found.length} records</td>
          </tr>
        </tfoot>
      </table>
    </div>`;
}

// ============================================================
//  SAVE (localStorage)
// ============================================================
function getSavedSearches() {
  return JSON.parse(localStorage.getItem('searchedData') || '[]');
}

function doSave(label) {
  const name = (document.getElementById('saveName') || {}).value;
  if (!name || !name.trim()) {
    document.getElementById('saveMsg').innerHTML = errorBox('⚠️ Enter your name first.');
    return;
  }
  const list = getSavedSearches();
  const sn = list.length ? Math.max(...list.map(x => x.sn)) + 1 : 1;
  list.push({ sn, date: label, name: name.trim() });
  localStorage.setItem('searchedData', JSON.stringify(list));
  document.getElementById('saveMsg').innerHTML = `<div class="success-box">✅ SAVED &mdash; ${label} (${name.trim()})</div>`;
  const inp = document.getElementById('saveName');
  if (inp) inp.disabled = true;
  const btn = document.querySelector('.btn-save');
  if (btn) btn.disabled = true;
}

// ============================================================
//  HISTORY
// ============================================================
function renderHistory() {
  const list = getSavedSearches();
  const box = document.getElementById('historyContent');
  if (!list.length) {
    box.innerHTML = '<p style="font-family:\'Share Tech Mono\',monospace;font-size:14px;color:rgba(251,218,237,0.4);letter-spacing:1px;">// NO SAVED SEARCHES YET</p>';
    return;
  }
  const rows = list.map(r => `
    <tr>
      <td>${r.sn}</td>
      <td>${r.date}</td>
      <td>${r.name}</td>
      <td><button class="del-btn" onclick="deleteEntry(${r.sn})">DEL</button></td>
    </tr>`).join('');
  box.innerHTML = `
    <div class="table-wrap">
      <table>
        <thead><tr><th>#</th><th>Query</th><th>Name</th><th>Action</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function deleteEntry(sn) {
  localStorage.setItem('searchedData',
    JSON.stringify(getSavedSearches().filter(r => r.sn !== sn)));
  renderHistory();
}

// ============================================================
//  HELPERS
// ============================================================
function errorBox(msg) {
  return `<div class="error-box">${msg}</div>`;
}

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchForm').addEventListener('submit', doSearch);
  document.getElementById('searchInput').addEventListener('input', updateModeHint);
});
