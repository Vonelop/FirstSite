function init() {
    let map = new ymaps.Map('map-presence', {
        center: [56.86200763182443,35.9201537850128],
        zoom: 11
    }),
    objectManager = new ymaps.ObjectManager({
        // Чтобы метки начали кластеризоваться, выставляем опцию.
        clusterize: true,
        // ObjectManager принимает те же опции, что и кластеризатор.
        gridSize: 32,
        clusterDisableClickZoom: true
    });
    
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    map.geoObjects.add(objectManager);


    var data = {
        "type": "FeatureCollection",
        "features": [
            {"type": "Feature", "id": 1, "geometry": {"type": "Point", "coordinates":  [56.852784, 36.002636]}},
            {"type": "Feature", "id": 2, "geometry": {"type": "Point", "coordinates":  [56.947558, 35.866167]}},
            {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates":  [56.858729, 36.004567]}},
            {"type": "Feature", "id": 4, "geometry": {"type": "Point", "coordinates":  [56.799249, 36.181878]}},
            {"type": "Feature", "id": 5, "geometry": {"type": "Point", "coordinates":  [56.677294, 36.073862]}},
            {"type": "Feature", "id": 6, "geometry": {"type": "Point", "coordinates":  [56.783153, 35.910202]}},
            {"type": "Feature", "id": 7, "geometry": {"type": "Point", "coordinates":  [56.641966, 35.257042]}},
            {"type": "Feature", "id": 8, "geometry": {"type": "Point", "coordinates":  [56.754161, 35.884822]}},
            {"type": "Feature", "id": 9, "geometry": {"type": "Point", "coordinates":  [57.076875, 35.350410]}},
            {"type": "Feature", "id": 10, "geometry": {"type": "Point", "coordinates": [56.742141, 35.917412]}},
            {"type": "Feature", "id": 11, "geometry": {"type": "Point", "coordinates": [56.776019, 36.291641]}},
            {"type": "Feature", "id": 12, "geometry": {"type": "Point", "coordinates": [56.727052, 35.446425]}},
            {"type": "Feature", "id": 13, "geometry": {"type": "Point", "coordinates": [56.781261, 35.944397]}},
            {"type": "Feature", "id": 14, "geometry": {"type": "Point", "coordinates": [56.800646, 35.788504]}},
            {"type": "Feature", "id": 15, "geometry": {"type": "Point", "coordinates": [57.005975, 35.235779]}},
            {"type": "Feature", "id": 16, "geometry": {"type": "Point", "coordinates": [56.657010, 35.678658]}},
            {"type": "Feature", "id": 17, "geometry": {"type": "Point", "coordinates": [56.706621, 35.607098]}},
            {"type": "Feature", "id": 18, "geometry": {"type": "Point", "coordinates": [57.057382, 36.068877]}},
            {"type": "Feature", "id": 19, "geometry": {"type": "Point", "coordinates": [56.713020, 35.805742]}},
            {"type": "Feature", "id": 20, "geometry": {"type": "Point", "coordinates": [56.890270, 36.029063]}},
            {"type": "Feature", "id": 21, "geometry": {"type": "Point", "coordinates": [56.637635, 35.527426]}},
            {"type": "Feature", "id": 22, "geometry": {"type": "Point", "coordinates": [56.713380, 36.023997]}},
            {"type": "Feature", "id": 23, "geometry": {"type": "Point", "coordinates": [56.923572, 36.007728]}},
            {"type": "Feature", "id": 24, "geometry": {"type": "Point", "coordinates": [56.686565, 35.763315]}},
            {"type": "Feature", "id": 25, "geometry": {"type": "Point", "coordinates": [56.874503, 36.044065]}},
            {"type": "Feature", "id": 26, "geometry": {"type": "Point", "coordinates": [56.943473, 36.137988]}},
            {"type": "Feature", "id": 27, "geometry": {"type": "Point", "coordinates": [56.980738, 35.130946]}},
            {"type": "Feature", "id": 28, "geometry": {"type": "Point", "coordinates": [56.679015, 35.890750]}},
            {"type": "Feature", "id": 29, "geometry": {"type": "Point", "coordinates": [56.991454, 35.928075]}},
            {"type": "Feature", "id": 30, "geometry": {"type": "Point", "coordinates": [56.726465, 35.474515]}},
            {"type": "Feature", "id": 31, "geometry": {"type": "Point", "coordinates": [56.789146, 35.933105]}},
            {"type": "Feature", "id": 32, "geometry": {"type": "Point", "coordinates": [56.633100, 35.618497]}},
            {"type": "Feature", "id": 33, "geometry": {"type": "Point", "coordinates": [56.782701, 35.792869]}},
            {"type": "Feature", "id": 34, "geometry": {"type": "Point", "coordinates": [56.989306, 35.726232]}},
            {"type": "Feature", "id": 35, "geometry": {"type": "Point", "coordinates": [56.826769, 35.587533]}},
            {"type": "Feature", "id": 36, "geometry": {"type": "Point", "coordinates": [56.847936, 35.674175]}},
            {"type": "Feature", "id": 37, "geometry": {"type": "Point", "coordinates": [56.823439, 36.004620]}},
            {"type": "Feature", "id": 38, "geometry": {"type": "Point", "coordinates": [56.939063, 35.803811]}},
            {"type": "Feature", "id": 39, "geometry": {"type": "Point", "coordinates": [56.867124, 36.567936]}},
            {"type": "Feature", "id": 40, "geometry": {"type": "Point", "coordinates": [57.005171, 34.918422]}},
            {"type": "Feature", "id": 41, "geometry": {"type": "Point", "coordinates": [56.834737, 35.817178]}},
            {"type": "Feature", "id": 42, "geometry": {"type": "Point", "coordinates": [56.792404, 35.930752]}},
            {"type": "Feature", "id": 43, "geometry": {"type": "Point", "coordinates": [56.874666, 36.553760]}},
            {"type": "Feature", "id": 44, "geometry": {"type": "Point", "coordinates": [56.918345, 35.195831]}},
            {"type": "Feature", "id": 45, "geometry": {"type": "Point", "coordinates": [56.660611, 35.275027]}},
            {"type": "Feature", "id": 46, "geometry": {"type": "Point", "coordinates": [56.815272, 35.863549]}},
            {"type": "Feature", "id": 47, "geometry": {"type": "Point", "coordinates": [56.900941, 35.795756]}},
            {"type": "Feature", "id": 48, "geometry": {"type": "Point", "coordinates": [56.997975, 35.069465]}},
            {"type": "Feature", "id": 49, "geometry": {"type": "Point", "coordinates": [56.989586, 35.158219]}},
            {"type": "Feature", "id": 50, "geometry": {"type": "Point", "coordinates": [56.970947, 35.433274]}},
            {"type": "Feature", "id": 51, "geometry": {"type": "Point", "coordinates": [56.736138, 35.884381]}},
            {"type": "Feature", "id": 52, "geometry": {"type": "Point", "coordinates": [56.684375, 35.304545]}},
            {"type": "Feature", "id": 53, "geometry": {"type": "Point", "coordinates": [56.900206, 35.264507]}},
            {"type": "Feature", "id": 54, "geometry": {"type": "Point", "coordinates": [56.941238, 35.252380]}},
            {"type": "Feature", "id": 55, "geometry": {"type": "Point", "coordinates": [57.015606, 35.917151]}},
            {"type": "Feature", "id": 56, "geometry": {"type": "Point", "coordinates": [56.985981, 35.898727]}},
            {"type": "Feature", "id": 57, "geometry": {"type": "Point", "coordinates": [56.638832, 35.160285]}},
            {"type": "Feature", "id": 58, "geometry": {"type": "Point", "coordinates": [56.986889, 35.335726]}},
            {"type": "Feature", "id": 59, "geometry": {"type": "Point", "coordinates": [56.689066, 35.856578]}},
            {"type": "Feature", "id": 60, "geometry": {"type": "Point", "coordinates": [56.975284, 35.737821]}},
            {"type": "Feature", "id": 61, "geometry": {"type": "Point", "coordinates": [56.778411, 35.784946]}},
            {"type": "Feature", "id": 62, "geometry": {"type": "Point", "coordinates": [56.934127, 35.689348]}},
            {"type": "Feature", "id": 63, "geometry": {"type": "Point", "coordinates": [56.623024, 35.965975]}},
            {"type": "Feature", "id": 64, "geometry": {"type": "Point", "coordinates": [57.067498, 35.463089]}},
            {"type": "Feature", "id": 65, "geometry": {"type": "Point", "coordinates": [56.876382, 35.950084]}},
            {"type": "Feature", "id": 66, "geometry": {"type": "Point", "coordinates": [56.768719, 35.804521]}},
            {"type": "Feature", "id": 67, "geometry": {"type": "Point", "coordinates": [56.929707, 35.731074]}},
            {"type": "Feature", "id": 68, "geometry": {"type": "Point", "coordinates": [56.701215, 36.385057]}},
            {"type": "Feature", "id": 69, "geometry": {"type": "Point", "coordinates": [56.650414, 36.326541]}},
            {"type": "Feature", "id": 70, "geometry": {"type": "Point", "coordinates": [57.126543, 35.399371]}},
            {"type": "Feature", "id": 71, "geometry": {"type": "Point", "coordinates": [56.865274, 35.781542]}},
            {"type": "Feature", "id": 72, "geometry": {"type": "Point", "coordinates": [56.883027, 35.982153]}},
            {"type": "Feature", "id": 73, "geometry": {"type": "Point", "coordinates": [56.778426, 35.968239]}},
            {"type": "Feature", "id": 74, "geometry": {"type": "Point", "coordinates": [56.960780, 35.863333]}},
            {"type": "Feature", "id": 75, "geometry": {"type": "Point", "coordinates": [57.084259, 35.381675]}},
            {"type": "Feature", "id": 76, "geometry": {"type": "Point", "coordinates": [57.053999, 35.474435]}},
            {"type": "Feature", "id": 77, "geometry": {"type": "Point", "coordinates": [56.970731, 35.853838]}},
            {"type": "Feature", "id": 78, "geometry": {"type": "Point", "coordinates": [57.001573, 35.035194]}},
            {"type": "Feature", "id": 79, "geometry": {"type": "Point", "coordinates": [56.881566, 35.982207]}},
            {"type": "Feature", "id": 80, "geometry": {"type": "Point", "coordinates": [56.802913, 36.114745]}},
            {"type": "Feature", "id": 81, "geometry": {"type": "Point", "coordinates": [56.724529, 35.369062]}},
            {"type": "Feature", "id": 82, "geometry": {"type": "Point", "coordinates": [56.834565, 35.671929]}},
            {"type": "Feature", "id": 83, "geometry": {"type": "Point", "coordinates": [56.547810, 36.018571]}},
            {"type": "Feature", "id": 84, "geometry": {"type": "Point", "coordinates": [56.710648, 35.633239]}},
            {"type": "Feature", "id": 85, "geometry": {"type": "Point", "coordinates": [56.776128, 35.934192]}},
            {"type": "Feature", "id": 86, "geometry": {"type": "Point", "coordinates": [57.103422, 35.448949]}},
            {"type": "Feature", "id": 87, "geometry": {"type": "Point", "coordinates": [56.739396, 36.247246]}},
            {"type": "Feature", "id": 88, "geometry": {"type": "Point", "coordinates": [57.010465, 36.158672]}},
            {"type": "Feature", "id": 89, "geometry": {"type": "Point", "coordinates": [56.841537, 36.015382]}},
            {"type": "Feature", "id": 90, "geometry": {"type": "Point", "coordinates": [57.024161, 35.091842]}},
            {"type": "Feature", "id": 91, "geometry": {"type": "Point", "coordinates": [56.854542, 36.018895]}},
            {"type": "Feature", "id": 92, "geometry": {"type": "Point", "coordinates": [56.830408, 36.475616]}},
            {"type": "Feature", "id": 93, "geometry": {"type": "Point", "coordinates": [57.024837, 35.479528]}},
            {"type": "Feature", "id": 94, "geometry": {"type": "Point", "coordinates": [57.018766, 35.113051]}},
            {"type": "Feature", "id": 95, "geometry": {"type": "Point", "coordinates": [56.778036, 36.062373]}},
            {"type": "Feature", "id": 96, "geometry": {"type": "Point", "coordinates": [56.806979, 35.532843]}},
            {"type": "Feature", "id": 97, "geometry": {"type": "Point", "coordinates": [56.605796, 35.712165]}},
            {"type": "Feature", "id": 98, "geometry": {"type": "Point", "coordinates": [56.902796, 35.925811]}},
            {"type": "Feature", "id": 99, "geometry": {"type": "Point", "coordinates": [56.585622, 35.994254]}},
            {"type": "Feature", "id": 100, "geometry": {"type": "Point", "coordinates":[56.952898, 35.624884]}},
            {"type": "Feature", "id": 101, "geometry": {"type": "Point", "coordinates":[56.826665, 35.804601]}},
            {"type": "Feature", "id": 102, "geometry": {"type": "Point", "coordinates":[57.026385, 35.507708]}},
            {"type": "Feature", "id": 103, "geometry": {"type": "Point", "coordinates":[56.891298, 35.564634]}},
            {"type": "Feature", "id": 104, "geometry": {"type": "Point", "coordinates":[56.995200, 35.013644]}},
            {"type": "Feature", "id": 105, "geometry": {"type": "Point", "coordinates":[56.958861, 35.565147]}},
            {"type": "Feature", "id": 106, "geometry": {"type": "Point", "coordinates":[56.941503, 36.093715]}},
            {"type": "Feature", "id": 107, "geometry": {"type": "Point", "coordinates":[56.981837, 34.911487]}},
            {"type": "Feature", "id": 108, "geometry": {"type": "Point", "coordinates":[57.110994, 35.395563]}},
            {"type": "Feature", "id": 109, "geometry": {"type": "Point", "coordinates":[57.086289, 35.527732]}},
            {"type": "Feature", "id": 110, "geometry": {"type": "Point", "coordinates":[56.942293, 35.856659]}},
            {"type": "Feature", "id": 111, "geometry": {"type": "Point", "coordinates":[56.749125, 36.190455]}},
            {"type": "Feature", "id": 112, "geometry": {"type": "Point", "coordinates":[56.871827, 35.684299]}},
            {"type": "Feature", "id": 113, "geometry": {"type": "Point", "coordinates":[56.788998, 36.092682]}},
            {"type": "Feature", "id": 114, "geometry": {"type": "Point", "coordinates":[56.891504, 36.058367]}},
            {"type": "Feature", "id": 115, "geometry": {"type": "Point", "coordinates":[56.791197, 35.967601]}},
            {"type": "Feature", "id": 116, "geometry": {"type": "Point", "coordinates":[56.805816, 36.105034]}},
            {"type": "Feature", "id": 117, "geometry": {"type": "Point", "coordinates":[56.735703, 35.901961]}},
            {"type": "Feature", "id": 118, "geometry": {"type": "Point", "coordinates":[56.654422, 35.945709]}},
            {"type": "Feature", "id": 119, "geometry": {"type": "Point", "coordinates":[56.936200, 35.045049]}},
            {"type": "Feature", "id": 120, "geometry": {"type": "Point", "coordinates":[56.705925, 35.913567]}},
            {"type": "Feature", "id": 121, "geometry": {"type": "Point", "coordinates":[56.774983, 36.069946]}},
            {"type": "Feature", "id": 122, "geometry": {"type": "Point", "coordinates":[57.060446, 35.403602]}},
            {"type": "Feature", "id": 123, "geometry": {"type": "Point", "coordinates":[56.699575, 35.629565]}},
            {"type": "Feature", "id": 124, "geometry": {"type": "Point", "coordinates":[56.838622, 35.029822]}},
            {"type": "Feature", "id": 125, "geometry": {"type": "Point", "coordinates":[56.996416, 35.725604]}},
            {"type": "Feature", "id": 126, "geometry": {"type": "Point", "coordinates":[57.040922, 36.152339]}},
            {"type": "Feature", "id": 127, "geometry": {"type": "Point", "coordinates":[56.799852, 35.749867]}},
            {"type": "Feature", "id": 128, "geometry": {"type": "Point", "coordinates":[57.117773, 35.548644]}},
            {"type": "Feature", "id": 129, "geometry": {"type": "Point", "coordinates":[56.833215, 35.806165]}},
            {"type": "Feature", "id": 130, "geometry": {"type": "Point", "coordinates":[56.696323, 35.288780]}},
            {"type": "Feature", "id": 131, "geometry": {"type": "Point", "coordinates":[56.859040, 35.749077]}},
            {"type": "Feature", "id": 132, "geometry": {"type": "Point", "coordinates":[56.848448, 35.739779]}},
            {"type": "Feature", "id": 133, "geometry": {"type": "Point", "coordinates":[56.987972, 35.441466]}},
            {"type": "Feature", "id": 134, "geometry": {"type": "Point", "coordinates":[56.927482, 35.913899]}},
            {"type": "Feature", "id": 135, "geometry": {"type": "Point", "coordinates":[56.834880, 36.015211]}},
            {"type": "Feature", "id": 136, "geometry": {"type": "Point", "coordinates":[56.874715, 35.523941]}},
            {"type": "Feature", "id": 137, "geometry": {"type": "Point", "coordinates":[56.930129, 35.265469]}},
            {"type": "Feature", "id": 138, "geometry": {"type": "Point", "coordinates":[57.137241, 35.690992]}},
            {"type": "Feature", "id": 139, "geometry": {"type": "Point", "coordinates":[56.890939, 35.985648]}},
            {"type": "Feature", "id": 140, "geometry": {"type": "Point", "coordinates":[56.930959, 35.917322]}},
            {"type": "Feature", "id": 141, "geometry": {"type": "Point", "coordinates":[56.967326, 35.800658]}},
            {"type": "Feature", "id": 142, "geometry": {"type": "Point", "coordinates":[56.984137, 35.238286]}},
            {"type": "Feature", "id": 143, "geometry": {"type": "Point", "coordinates":[56.730864, 35.535125]}},
            {"type": "Feature", "id": 144, "geometry": {"type": "Point", "coordinates":[56.922540, 35.868508]}},
            {"type": "Feature", "id": 145, "geometry": {"type": "Point", "coordinates":[56.850132, 35.648780]}},
            {"type": "Feature", "id": 146, "geometry": {"type": "Point", "coordinates":[56.994543, 35.181126]}},
            {"type": "Feature", "id": 147, "geometry": {"type": "Point", "coordinates":[56.805348, 35.109404]}},
            {"type": "Feature", "id": 148, "geometry": {"type": "Point", "coordinates":[57.002618, 35.720834]}},
            {"type": "Feature", "id": 149, "geometry": {"type": "Point", "coordinates":[56.645331, 35.925658]}},
            {"type": "Feature", "id": 150, "geometry": {"type": "Point", "coordinates":[56.818395, 35.114974]}},
            {"type": "Feature", "id": 151, "geometry": {"type": "Point", "coordinates":[56.884551, 36.015310]}},
            {"type": "Feature", "id": 152, "geometry": {"type": "Point", "coordinates":[56.982970, 35.297691]}},
            {"type": "Feature", "id": 153, "geometry": {"type": "Point", "coordinates":[56.666028, 35.972209]}},
            {"type": "Feature", "id": 154, "geometry": {"type": "Point", "coordinates":[57.034555, 35.735943]}},
            {"type": "Feature", "id": 155, "geometry": {"type": "Point", "coordinates":[56.713054, 35.311732]}},
            {"type": "Feature", "id": 156, "geometry": {"type": "Point", "coordinates":[56.943398, 35.918714]}},
            {"type": "Feature", "id": 157, "geometry": {"type": "Point", "coordinates":[56.793366, 36.238685]}},
            {"type": "Feature", "id": 158, "geometry": {"type": "Point", "coordinates":[56.690673, 35.398940]}},
            {"type": "Feature", "id": 159, "geometry": {"type": "Point", "coordinates":[56.890486, 35.753460]}},
            {"type": "Feature", "id": 160, "geometry": {"type": "Point", "coordinates":[56.852465, 35.754628]}},
            {"type": "Feature", "id": 161, "geometry": {"type": "Point", "coordinates":[56.900771, 35.975003]}},
            {"type": "Feature", "id": 162, "geometry": {"type": "Point", "coordinates":[56.916178, 35.965445]}},
            {"type": "Feature", "id": 163, "geometry": {"type": "Point", "coordinates":[56.664589, 35.661796]}},
            {"type": "Feature", "id": 164, "geometry": {"type": "Point", "coordinates":[56.639525, 35.730374]}},
            {"type": "Feature", "id": 165, "geometry": {"type": "Point", "coordinates":[57.080668, 35.751655]}},
            {"type": "Feature", "id": 166, "geometry": {"type": "Point", "coordinates":[56.854955, 36.002357]}},
            {"type": "Feature", "id": 167, "geometry": {"type": "Point", "coordinates":[56.856555, 36.018913]}},
            {"type": "Feature", "id": 168, "geometry": {"type": "Point", "coordinates":[56.731383, 35.868382]}},
            {"type": "Feature", "id": 169, "geometry": {"type": "Point", "coordinates":[56.719777, 35.979575]}},
            {"type": "Feature", "id": 170, "geometry": {"type": "Point", "coordinates":[56.878242, 35.016905]}},
            {"type": "Feature", "id": 171, "geometry": {"type": "Point", "coordinates":[56.872575, 35.641324]}},
            {"type": "Feature", "id": 172, "geometry": {"type": "Point", "coordinates":[56.931387, 35.314723]}},
            {"type": "Feature", "id": 173, "geometry": {"type": "Point", "coordinates":[56.935370, 35.948817]}},
            {"type": "Feature", "id": 174, "geometry": {"type": "Point", "coordinates":[56.935350, 35.972892]}},
            {"type": "Feature", "id": 175, "geometry": {"type": "Point", "coordinates":[56.534232, 35.990436]}},
            {"type": "Feature", "id": 176, "geometry": {"type": "Point", "coordinates":[56.908989, 35.939771]}},
            {"type": "Feature", "id": 177, "geometry": {"type": "Point", "coordinates":[56.732775, 35.373635]}},
            {"type": "Feature", "id": 178, "geometry": {"type": "Point", "coordinates":[56.739347, 35.971985]}},
            {"type": "Feature", "id": 179, "geometry": {"type": "Point", "coordinates":[56.779881, 36.316381]}},
            {"type": "Feature", "id": 180, "geometry": {"type": "Point", "coordinates":[56.658924, 35.234036]}},
            {"type": "Feature", "id": 181, "geometry": {"type": "Point", "coordinates":[56.818252, 36.005132]}},
            {"type": "Feature", "id": 182, "geometry": {"type": "Point", "coordinates":[56.735037, 35.483804]}},
            {"type": "Feature", "id": 183, "geometry": {"type": "Point", "coordinates":[56.950237, 35.875856]}},
            {"type": "Feature", "id": 184, "geometry": {"type": "Point", "coordinates":[56.666661, 35.955725]}},
            {"type": "Feature", "id": 185, "geometry": {"type": "Point", "coordinates":[56.836175, 36.262688]}},
            {"type": "Feature", "id": 186, "geometry": {"type": "Point", "coordinates":[57.091947, 35.372862]}},
            {"type": "Feature", "id": 187, "geometry": {"type": "Point", "coordinates":[56.781005, 36.203157]}},
            {"type": "Feature", "id": 188, "geometry": {"type": "Point", "coordinates":[56.886686, 35.992816]}},
            {"type": "Feature", "id": 189, "geometry": {"type": "Point", "coordinates":[56.834309, 36.212203]}},
            {"type": "Feature", "id": 190, "geometry": {"type": "Point", "coordinates":[56.923935, 35.635386]}},
            {"type": "Feature", "id": 191, "geometry": {"type": "Point", "coordinates":[56.725798, 35.338016]}},
            {"type": "Feature", "id": 192, "geometry": {"type": "Point", "coordinates":[56.797186, 35.722756]}},
            {"type": "Feature", "id": 193, "geometry": {"type": "Point", "coordinates":[56.539051, 35.961313]}},
            {"type": "Feature", "id": 194, "geometry": {"type": "Point", "coordinates":[56.716967, 35.833177]}},
            {"type": "Feature", "id": 195, "geometry": {"type": "Point", "coordinates":[56.759148, 35.805015]}},
            {"type": "Feature", "id": 196, "geometry": {"type": "Point", "coordinates":[56.856122, 36.468133]}},
            {"type": "Feature", "id": 197, "geometry": {"type": "Point", "coordinates":[56.972860, 35.548510]}},
            {"type": "Feature", "id": 198, "geometry": {"type": "Point", "coordinates":[56.693486, 35.832656]}},
            {"type": "Feature", "id": 199, "geometry": {"type": "Point", "coordinates":[57.004402, 35.727822]}},
            {"type": "Feature", "id": 200, "geometry": {"type": "Point", "coordinates":[56.638486, 35.333004]}},
            {"type": "Feature", "id": 201, "geometry": {"type": "Point", "coordinates":[56.961629, 35.791109]}},
            {"type": "Feature", "id": 202, "geometry": {"type": "Point", "coordinates":[56.825779, 35.243954]}},
            {"type": "Feature", "id": 203, "geometry": {"type": "Point", "coordinates":[56.938400, 35.688144]}},
            {"type": "Feature", "id": 204, "geometry": {"type": "Point", "coordinates":[57.119727, 35.692303]}},
            {"type": "Feature", "id": 205, "geometry": {"type": "Point", "coordinates":[56.931475, 35.656909]}},
            {"type": "Feature", "id": 206, "geometry": {"type": "Point", "coordinates":[56.688928, 36.017331]}},
            {"type": "Feature", "id": 207, "geometry": {"type": "Point", "coordinates":[56.759187, 36.114332]}},
            {"type": "Feature", "id": 208, "geometry": {"type": "Point", "coordinates":[56.956814, 36.159490]}},
            {"type": "Feature", "id": 209, "geometry": {"type": "Point", "coordinates":[56.776862, 35.954036]}},
            {"type": "Feature", "id": 210, "geometry": {"type": "Point", "coordinates":[56.917082, 36.049886]}},
            {"type": "Feature", "id": 211, "geometry": {"type": "Point", "coordinates":[56.913259, 36.046922]}},
            {"type": "Feature", "id": 212, "geometry": {"type": "Point", "coordinates":[56.679806, 35.510053]}},
            {"type": "Feature", "id": 213, "geometry": {"type": "Point", "coordinates":[56.792256, 35.991586]}},
            {"type": "Feature", "id": 214, "geometry": {"type": "Point", "coordinates":[57.082630, 35.424677]}},
            {"type": "Feature", "id": 215, "geometry": {"type": "Point", "coordinates":[56.747842, 36.320288]}},
            {"type": "Feature", "id": 216, "geometry": {"type": "Point", "coordinates":[56.999470, 34.898462]}},
            {"type": "Feature", "id": 217, "geometry": {"type": "Point", "coordinates":[56.909235, 35.040414]}},
            {"type": "Feature", "id": 218, "geometry": {"type": "Point", "coordinates":[56.720133, 35.813683]}},
            {"type": "Feature", "id": 219, "geometry": {"type": "Point", "coordinates":[56.729087, 35.380839]}},
            {"type": "Feature", "id": 220, "geometry": {"type": "Point", "coordinates":[56.720113, 36.267988]}},
            {"type": "Feature", "id": 221, "geometry": {"type": "Point", "coordinates":[56.766775, 35.912696]}},
            {"type": "Feature", "id": 222, "geometry": {"type": "Point", "coordinates":[56.720202, 35.601079]}},
            {"type": "Feature", "id": 223, "geometry": {"type": "Point", "coordinates":[56.517321, 35.971203]}},
            {"type": "Feature", "id": 224, "geometry": {"type": "Point", "coordinates":[56.719293, 35.961932]}},
            {"type": "Feature", "id": 225, "geometry": {"type": "Point", "coordinates":[56.836938, 35.667734]}},
            {"type": "Feature", "id": 226, "geometry": {"type": "Point", "coordinates":[56.832014, 35.671570]}},
            {"type": "Feature", "id": 227, "geometry": {"type": "Point", "coordinates":[56.946369, 35.685224]}},
            {"type": "Feature", "id": 228, "geometry": {"type": "Point", "coordinates":[56.964127, 34.858918]}},
            {"type": "Feature", "id": 229, "geometry": {"type": "Point", "coordinates":[56.846450, 35.035644]}},
            {"type": "Feature", "id": 230, "geometry": {"type": "Point", "coordinates":[56.811724, 35.850371]}},
            {"type": "Feature", "id": 231, "geometry": {"type": "Point", "coordinates":[56.935252, 35.792609]}},
            {"type": "Feature", "id": 232, "geometry": {"type": "Point", "coordinates":[56.932978, 35.334324]}},
            {"type": "Feature", "id": 233, "geometry": {"type": "Point", "coordinates":[56.815912, 36.167179]}},
            {"type": "Feature", "id": 234, "geometry": {"type": "Point", "coordinates":[56.967807, 35.616970]}},
            {"type": "Feature", "id": 235, "geometry": {"type": "Point", "coordinates":[56.929809, 35.479156]}},
            {"type": "Feature", "id": 236, "geometry": {"type": "Point", "coordinates":[57.059179, 35.530713]}},
            {"type": "Feature", "id": 237, "geometry": {"type": "Point", "coordinates":[56.974018, 35.877706]}},
            {"type": "Feature", "id": 238, "geometry": {"type": "Point", "coordinates":[56.709991, 36.106166]}},
            {"type": "Feature", "id": 239, "geometry": {"type": "Point", "coordinates":[56.730218, 36.134795]}},
            {"type": "Feature", "id": 240, "geometry": {"type": "Point", "coordinates":[56.977569, 35.683007]}},
            {"type": "Feature", "id": 241, "geometry": {"type": "Point", "coordinates":[56.725946, 35.426761]}},
            {"type": "Feature", "id": 242, "geometry": {"type": "Point", "coordinates":[56.853597, 35.398922]}},
            {"type": "Feature", "id": 243, "geometry": {"type": "Point", "coordinates":[56.610329, 35.581559]}},
            {"type": "Feature", "id": 244, "geometry": {"type": "Point", "coordinates":[56.844707, 36.323630]}},
            {"type": "Feature", "id": 245, "geometry": {"type": "Point", "coordinates":[56.700178, 35.952967]}},
            {"type": "Feature", "id": 246, "geometry": {"type": "Point", "coordinates":[56.747946, 35.602851]}},
            {"type": "Feature", "id": 247, "geometry": {"type": "Point", "coordinates":[56.920963, 35.113545]}},
            {"type": "Feature", "id": 248, "geometry": {"type": "Point", "coordinates":[56.779530, 35.834354]}},
            {"type": "Feature", "id": 249, "geometry": {"type": "Point", "coordinates":[56.966570, 35.745456]}},
            {"type": "Feature", "id": 250, "geometry": {"type": "Point", "coordinates":[56.638828, 35.251176]}},
            {"type": "Feature", "id": 251, "geometry": {"type": "Point", "coordinates":[56.727497, 35.389301]}},
            {"type": "Feature", "id": 252, "geometry": {"type": "Point", "coordinates":[56.779915, 35.863540]}},
            {"type": "Feature", "id": 253, "geometry": {"type": "Point", "coordinates":[56.761970, 36.372705]}},
            {"type": "Feature", "id": 254, "geometry": {"type": "Point", "coordinates":[56.578423, 35.925631]}},
            {"type": "Feature", "id": 255, "geometry": {"type": "Point", "coordinates":[56.929776, 35.924455]}},
            {"type": "Feature", "id": 256, "geometry": {"type": "Point", "coordinates":[56.859635, 35.127038]}},
            {"type": "Feature", "id": 257, "geometry": {"type": "Point", "coordinates":[56.774105, 36.352960]}},
            {"type": "Feature", "id": 258, "geometry": {"type": "Point", "coordinates":[56.912699, 35.879844]}},
            {"type": "Feature", "id": 259, "geometry": {"type": "Point", "coordinates":[56.852593, 36.426963]}},
            {"type": "Feature", "id": 260, "geometry": {"type": "Point", "coordinates":[56.838031, 35.611167]}},
            {"type": "Feature", "id": 261, "geometry": {"type": "Point", "coordinates":[56.620062, 35.201221]}},
            {"type": "Feature", "id": 262, "geometry": {"type": "Point", "coordinates":[56.862632, 36.039709]}},
            {"type": "Feature", "id": 263, "geometry": {"type": "Point", "coordinates":[56.708232, 36.232541]}},
            {"type": "Feature", "id": 264, "geometry": {"type": "Point", "coordinates":[56.652200, 36.013100]}},
            {"type": "Feature", "id": 265, "geometry": {"type": "Point", "coordinates":[56.763179, 35.813486]}},
            {"type": "Feature", "id": 266, "geometry": {"type": "Point", "coordinates":[56.697375, 35.711958]}},
            {"type": "Feature", "id": 267, "geometry": {"type": "Point", "coordinates":[56.851077, 36.036322]}},
            {"type": "Feature", "id": 268, "geometry": {"type": "Point", "coordinates":[56.843383, 36.035001]}},
            {"type": "Feature", "id": 269, "geometry": {"type": "Point", "coordinates":[56.915883, 35.248311]}},
            {"type": "Feature", "id": 270, "geometry": {"type": "Point", "coordinates":[57.033874, 35.745331]}},
            {"type": "Feature", "id": 271, "geometry": {"type": "Point", "coordinates":[56.915578, 35.108847]}},
            {"type": "Feature", "id": 272, "geometry": {"type": "Point", "coordinates":[56.960363, 35.748160]}},
            {"type": "Feature", "id": 273, "geometry": {"type": "Point", "coordinates":[56.709003, 36.250390]}},
            {"type": "Feature", "id": 274, "geometry": {"type": "Point", "coordinates":[56.712802, 36.196114]}},
            {"type": "Feature", "id": 275, "geometry": {"type": "Point", "coordinates":[56.864753, 35.772666]}},
            {"type": "Feature", "id": 276, "geometry": {"type": "Point", "coordinates":[56.864703, 35.763288]}},
            {"type": "Feature", "id": 277, "geometry": {"type": "Point", "coordinates":[56.861092, 35.760593]}},
            {"type": "Feature", "id": 278, "geometry": {"type": "Point", "coordinates":[56.942465, 35.787875]}},
            {"type": "Feature", "id": 279, "geometry": {"type": "Point", "coordinates":[57.022465, 36.115670]}},
            {"type": "Feature", "id": 280, "geometry": {"type": "Point", "coordinates":[56.978345, 35.914367]}},
            {"type": "Feature", "id": 281, "geometry": {"type": "Point", "coordinates":[56.900879, 35.984741]}},
            {"type": "Feature", "id": 282, "geometry": {"type": "Point", "coordinates":[56.869496, 35.962058]}},
            {"type": "Feature", "id": 283, "geometry": {"type": "Point", "coordinates":[57.001485, 35.158937]}},
            {"type": "Feature", "id": 284, "geometry": {"type": "Point", "coordinates":[56.988492, 35.212225]}},
            {"type": "Feature", "id": 285, "geometry": {"type": "Point", "coordinates":[56.729032, 36.166200]}},
            {"type": "Feature", "id": 286, "geometry": {"type": "Point", "coordinates":[56.777247, 35.945421]}},
            {"type": "Feature", "id": 287, "geometry": {"type": "Point", "coordinates":[56.970888, 35.887902]}},
            {"type": "Feature", "id": 288, "geometry": {"type": "Point", "coordinates":[57.003990, 35.471470]}},
            {"type": "Feature", "id": 289, "geometry": {"type": "Point", "coordinates":[56.868516, 36.022155]}},
            {"type": "Feature", "id": 290, "geometry": {"type": "Point", "coordinates":[57.011396, 35.157464]}},
            {"type": "Feature", "id": 291, "geometry": {"type": "Point", "coordinates":[56.767155, 35.882162]}},
            {"type": "Feature", "id": 292, "geometry": {"type": "Point", "coordinates":[56.733872, 35.509119]}},
            {"type": "Feature", "id": 293, "geometry": {"type": "Point", "coordinates":[56.833954, 35.651744]}},
            {"type": "Feature", "id": 294, "geometry": {"type": "Point", "coordinates":[56.830379, 35.044052]}},
            {"type": "Feature", "id": 295, "geometry": {"type": "Point", "coordinates":[56.940256, 35.485700]}},
            {"type": "Feature", "id": 296, "geometry": {"type": "Point", "coordinates":[57.096172, 35.574579]}},
            {"type": "Feature", "id": 297, "geometry": {"type": "Point", "coordinates":[57.069602, 35.746238]}},
            {"type": "Feature", "id": 298, "geometry": {"type": "Point", "coordinates":[56.929481, 35.384962]}},
            {"type": "Feature", "id": 299, "geometry": {"type": "Point", "coordinates":[56.827084, 35.602202]}},
            {"type": "Feature", "id": 300, "geometry": {"type": "Point", "coordinates":[56.753819, 36.142646]}},
            {"type": "Feature", "id": 301, "geometry": {"type": "Point", "coordinates":[56.769237, 35.795079]}},
            {"type": "Feature", "id": 302, "geometry": {"type": "Point", "coordinates":[57.004995, 36.074581]}},
            {"type": "Feature", "id": 303, "geometry": {"type": "Point", "coordinates":[56.770189, 35.874832]}},
            {"type": "Feature", "id": 304, "geometry": {"type": "Point", "coordinates":[56.999681, 36.072138]}},
            {"type": "Feature", "id": 305, "geometry": {"type": "Point", "coordinates":[56.783150, 35.910207]}},
            {"type": "Feature", "id": 306, "geometry": {"type": "Point", "coordinates":[56.745784, 35.638584]}},
            {"type": "Feature", "id": 307, "geometry": {"type": "Point", "coordinates":[56.709156, 35.326105]}},
            {"type": "Feature", "id": 308, "geometry": {"type": "Point", "coordinates":[56.933435, 36.152214]}},
            {"type": "Feature", "id": 309, "geometry": {"type": "Point", "coordinates":[56.845889, 36.034031]}},
            {"type": "Feature", "id": 310, "geometry": {"type": "Point", "coordinates":[56.968651, 35.866352]}},
            {"type": "Feature", "id": 311, "geometry": {"type": "Point", "coordinates":[56.875035, 35.795340]}},
            {"type": "Feature", "id": 312, "geometry": {"type": "Point", "coordinates":[56.826695, 35.821849]}},
            {"type": "Feature", "id": 313, "geometry": {"type": "Point", "coordinates":[56.807462, 35.836905]}},
            {"type": "Feature", "id": 314, "geometry": {"type": "Point", "coordinates":[56.830477, 36.401209]}},
            {"type": "Feature", "id": 315, "geometry": {"type": "Point", "coordinates":[56.941292, 36.122973]}},
            {"type": "Feature", "id": 316, "geometry": {"type": "Point", "coordinates":[56.837435, 34.985338]}},
            {"type": "Feature", "id": 317, "geometry": {"type": "Point", "coordinates":[56.943899, 35.894433]}},
            {"type": "Feature", "id": 318, "geometry": {"type": "Point", "coordinates":[56.873436, 35.553424]}},
            {"type": "Feature", "id": 319, "geometry": {"type": "Point", "coordinates":[56.662605, 35.307357]}},
            {"type": "Feature", "id": 320, "geometry": {"type": "Point", "coordinates":[57.009186, 34.923669]}},
            {"type": "Feature", "id": 321, "geometry": {"type": "Point", "coordinates":[56.902005, 35.800793]}},
            {"type": "Feature", "id": 322, "geometry": {"type": "Point", "coordinates":[56.726860, 35.983636]}},
            {"type": "Feature", "id": 323, "geometry": {"type": "Point", "coordinates":[56.835274, 35.716432]}},
            {"type": "Feature", "id": 324, "geometry": {"type": "Point", "coordinates":[56.777346, 36.213308]}},
            {"type": "Feature", "id": 325, "geometry": {"type": "Point", "coordinates":[56.963346, 35.604502]}},
            {"type": "Feature", "id": 326, "geometry": {"type": "Point", "coordinates":[57.088895, 35.744558]}},
            {"type": "Feature", "id": 327, "geometry": {"type": "Point", "coordinates":[56.944375, 35.664401]}},
            {"type": "Feature", "id": 328, "geometry": {"type": "Point", "coordinates":[57.086778, 35.445680]}},
            {"type": "Feature", "id": 329, "geometry": {"type": "Point", "coordinates":[56.990699, 35.903048]}},
            {"type": "Feature", "id": 330, "geometry": {"type": "Point", "coordinates":[56.799246, 36.181876]}},
            {"type": "Feature", "id": 331, "geometry": {"type": "Point", "coordinates":[56.829428, 36.083097]}},
            {"type": "Feature", "id": 332, "geometry": {"type": "Point", "coordinates":[56.910851, 36.227043]}},
            {"type": "Feature", "id": 333, "geometry": {"type": "Point", "coordinates":[56.861367, 36.024159]}},
            {"type": "Feature", "id": 334, "geometry": {"type": "Point", "coordinates":[56.900491, 36.031579]}},
            {"type": "Feature", "id": 335, "geometry": {"type": "Point", "coordinates":[56.726015, 36.016837]}},
            {"type": "Feature", "id": 336, "geometry": {"type": "Point", "coordinates":[56.928862, 35.320652]}},
            {"type": "Feature", "id": 337, "geometry": {"type": "Point", "coordinates":[57.034065, 35.404061]}},
            {"type": "Feature", "id": 338, "geometry": {"type": "Point", "coordinates":[56.852145, 35.671525]}},
            {"type": "Feature", "id": 339, "geometry": {"type": "Point", "coordinates":[56.759148, 36.333458]}},
            {"type": "Feature", "id": 340, "geometry": {"type": "Point", "coordinates":[56.749244, 36.160433]}},
            {"type": "Feature", "id": 341, "geometry": {"type": "Point", "coordinates":[56.940010, 35.819612]}},
            {"type": "Feature", "id": 342, "geometry": {"type": "Point", "coordinates":[56.980351, 35.747657]}},
            {"type": "Feature", "id": 343, "geometry": {"type": "Point", "coordinates":[56.821607, 35.841369]}},
            {"type": "Feature", "id": 344, "geometry": {"type": "Point", "coordinates":[56.999480, 35.095876]}},
            {"type": "Feature", "id": 345, "geometry": {"type": "Point", "coordinates":[56.958154, 36.120153]}},
            {"type": "Feature", "id": 346, "geometry": {"type": "Point", "coordinates":[56.961742, 36.147893]}},
            {"type": "Feature", "id": 347, "geometry": {"type": "Point", "coordinates":[56.791852, 36.068185]}},
            {"type": "Feature", "id": 348, "geometry": {"type": "Point", "coordinates":[56.750779, 35.581684]}},
            {"type": "Feature", "id": 349, "geometry": {"type": "Point", "coordinates":[56.941591, 35.738566]}},
            {"type": "Feature", "id": 350, "geometry": {"type": "Point", "coordinates":[57.127682, 35.676124]}},
            {"type": "Feature", "id": 351, "geometry": {"type": "Point", "coordinates":[56.967929, 35.751313]}},
            {"type": "Feature", "id": 352, "geometry": {"type": "Point", "coordinates":[56.905288, 35.800011]}},
            {"type": "Feature", "id": 353, "geometry": {"type": "Point", "coordinates":[56.870450, 36.014250]}},
            {"type": "Feature", "id": 354, "geometry": {"type": "Point", "coordinates":[56.663693, 35.703775]}},
            {"type": "Feature", "id": 355, "geometry": {"type": "Point", "coordinates":[56.909814, 35.143998]}},
            {"type": "Feature", "id": 356, "geometry": {"type": "Point", "coordinates":[56.718004, 35.858411]}},
            {"type": "Feature", "id": 357, "geometry": {"type": "Point", "coordinates":[57.056696, 35.448366]}},
            {"type": "Feature", "id": 358, "geometry": {"type": "Point", "coordinates":[56.894543, 35.085832]}},
            {"type": "Feature", "id": 359, "geometry": {"type": "Point", "coordinates":[56.872624, 36.024015]}},
            {"type": "Feature", "id": 360, "geometry": {"type": "Point", "coordinates":[56.651700, 35.516251]}},
            {"type": "Feature", "id": 361, "geometry": {"type": "Point", "coordinates":[56.499692, 35.971320]}},
            {"type": "Feature", "id": 362, "geometry": {"type": "Point", "coordinates":[56.638070, 35.902491]}},
            {"type": "Feature", "id": 363, "geometry": {"type": "Point", "coordinates":[56.914920, 35.586607]}},
            {"type": "Feature", "id": 364, "geometry": {"type": "Point", "coordinates":[56.798472, 36.102761]}},
            {"type": "Feature", "id": 365, "geometry": {"type": "Point", "coordinates":[56.631763, 35.904566]}},
            {"type": "Feature", "id": 366, "geometry": {"type": "Point", "coordinates":[56.885535, 35.983249]}},
            {"type": "Feature", "id": 367, "geometry": {"type": "Point", "coordinates":[57.013337, 36.082675]}},
            {"type": "Feature", "id": 368, "geometry": {"type": "Point", "coordinates":[57.094881, 35.595743]}},
            {"type": "Feature", "id": 369, "geometry": {"type": "Point", "coordinates":[56.729378, 36.010998]}},
            {"type": "Feature", "id": 370, "geometry": {"type": "Point", "coordinates":[56.935851, 36.083960]}},
            {"type": "Feature", "id": 371, "geometry": {"type": "Point", "coordinates":[56.934491, 35.418200]}},
            {"type": "Feature", "id": 372, "geometry": {"type": "Point", "coordinates":[56.930935, 35.429896]}},
            {"type": "Feature", "id": 373, "geometry": {"type": "Point", "coordinates":[56.732380, 35.653343]}},
            {"type": "Feature", "id": 374, "geometry": {"type": "Point", "coordinates":[56.769262, 36.098234]}},
            {"type": "Feature", "id": 375, "geometry": {"type": "Point", "coordinates":[56.675208, 35.263861]}},
            {"type": "Feature", "id": 376, "geometry": {"type": "Point", "coordinates":[56.949933, 35.765165]}},
            {"type": "Feature", "id": 377, "geometry": {"type": "Point", "coordinates":[56.828369, 35.627552]}},
            {"type": "Feature", "id": 378, "geometry": {"type": "Point", "coordinates":[57.033825, 35.456298]}},
            {"type": "Feature", "id": 379, "geometry": {"type": "Point", "coordinates":[56.928818, 35.964448]}},
            {"type": "Feature", "id": 380, "geometry": {"type": "Point", "coordinates":[56.755368, 35.552381]}},
            {"type": "Feature", "id": 381, "geometry": {"type": "Point", "coordinates":[56.760821, 35.568425]}},
            {"type": "Feature", "id": 382, "geometry": {"type": "Point", "coordinates":[56.591589, 35.760907]}},
            {"type": "Feature", "id": 383, "geometry": {"type": "Point", "coordinates":[57.061517, 35.354195]}},
            {"type": "Feature", "id": 384, "geometry": {"type": "Point", "coordinates":[56.540843, 35.986708]}},
            {"type": "Feature", "id": 385, "geometry": {"type": "Point", "coordinates":[56.818021, 35.238411]}},
            {"type": "Feature", "id": 386, "geometry": {"type": "Point", "coordinates":[56.967581, 35.976099]}},
            {"type": "Feature", "id": 387, "geometry": {"type": "Point", "coordinates":[56.953850, 35.794334]}},
            {"type": "Feature", "id": 388, "geometry": {"type": "Point", "coordinates":[56.956927, 35.252470]}},
            {"type": "Feature", "id": 389, "geometry": {"type": "Point", "coordinates":[56.633258, 35.171684]}},
            {"type": "Feature", "id": 390, "geometry": {"type": "Point", "coordinates":[56.773139, 35.854197]}},
            {"type": "Feature", "id": 391, "geometry": {"type": "Point", "coordinates":[56.886892, 35.998090]}},
            {"type": "Feature", "id": 392, "geometry": {"type": "Point", "coordinates":[56.886882, 36.002330]}},
            {"type": "Feature", "id": 393, "geometry": {"type": "Point", "coordinates":[56.924250, 36.062562]}},
            {"type": "Feature", "id": 394, "geometry": {"type": "Point", "coordinates":[56.757682, 35.841450]}},
            {"type": "Feature", "id": 395, "geometry": {"type": "Point", "coordinates":[56.857071, 36.554048]}},
            {"type": "Feature", "id": 396, "geometry": {"type": "Point", "coordinates":[56.837849, 35.324928]}},
            {"type": "Feature", "id": 397, "geometry": {"type": "Point", "coordinates":[56.958395, 35.523968]}},
            {"type": "Feature", "id": 398, "geometry": {"type": "Point", "coordinates":[56.959764, 36.167494]}},
            {"type": "Feature", "id": 399, "geometry": {"type": "Point", "coordinates":[56.937378, 35.957414]}},
            {"type": "Feature", "id": 400, "geometry": {"type": "Point", "coordinates":[56.708840, 35.498797]}},
            {"type": "Feature", "id": 401, "geometry": {"type": "Point", "coordinates":[57.021324, 35.477669]}},
            {"type": "Feature", "id": 402, "geometry": {"type": "Point", "coordinates":[56.946432, 35.826637]}},
            {"type": "Feature", "id": 403, "geometry": {"type": "Point", "coordinates":[56.702466, 35.264894]}},
            {"type": "Feature", "id": 404, "geometry": {"type": "Point", "coordinates":[56.863518, 36.005779]}},
            {"type": "Feature", "id": 405, "geometry": {"type": "Point", "coordinates":[56.700978, 35.757790]}},
            {"type": "Feature", "id": 406, "geometry": {"type": "Point", "coordinates":[56.837140, 36.104917]}},
            {"type": "Feature", "id": 407, "geometry": {"type": "Point", "coordinates":[56.721491, 35.757278]}},
            {"type": "Feature", "id": 408, "geometry": {"type": "Point", "coordinates":[56.875758, 35.602885]}},
            {"type": "Feature", "id": 409, "geometry": {"type": "Point", "coordinates":[56.951194, 35.177398]}},
            {"type": "Feature", "id": 410, "geometry": {"type": "Point", "coordinates":[56.965942, 35.163671]}},
            {"type": "Feature", "id": 411, "geometry": {"type": "Point", "coordinates":[56.980694, 36.055869]}},
            {"type": "Feature", "id": 412, "geometry": {"type": "Point", "coordinates":[56.739910, 36.034328]}},
            {"type": "Feature", "id": 413, "geometry": {"type": "Point", "coordinates":[56.791719, 35.943086]}},
            {"type": "Feature", "id": 414, "geometry": {"type": "Point", "coordinates":[56.907136, 35.811824]}},
            {"type": "Feature", "id": 415, "geometry": {"type": "Point", "coordinates":[56.551283, 36.032756]}},
            {"type": "Feature", "id": 416, "geometry": {"type": "Point", "coordinates":[56.887099, 36.066927]}},
            {"type": "Feature", "id": 417, "geometry": {"type": "Point", "coordinates":[56.990807, 35.062404]}},
            {"type": "Feature", "id": 418, "geometry": {"type": "Point", "coordinates":[56.897492, 36.049446]}},
            {"type": "Feature", "id": 419, "geometry": {"type": "Point", "coordinates":[56.929697, 35.885351]}},
            {"type": "Feature", "id": 420, "geometry": {"type": "Point", "coordinates":[56.967503, 35.277120]}},
            {"type": "Feature", "id": 421, "geometry": {"type": "Point", "coordinates":[56.885746, 35.134880]}},
            {"type": "Feature", "id": 422, "geometry": {"type": "Point", "coordinates":[56.705035, 35.828335]}},
            {"type": "Feature", "id": 423, "geometry": {"type": "Point", "coordinates":[56.950276, 35.301734]}},
            {"type": "Feature", "id": 424, "geometry": {"type": "Point", "coordinates":[56.827202, 35.019824]}},
            {"type": "Feature", "id": 425, "geometry": {"type": "Point", "coordinates":[56.884355, 35.460708]}},
            {"type": "Feature", "id": 426, "geometry": {"type": "Point", "coordinates":[57.010288, 34.974998]}},
            {"type": "Feature", "id": 427, "geometry": {"type": "Point", "coordinates":[56.721679, 36.186493]}},
            {"type": "Feature", "id": 428, "geometry": {"type": "Point", "coordinates":[56.768630, 36.377583]}},
            {"type": "Feature", "id": 429, "geometry": {"type": "Point", "coordinates":[56.716147, 35.418613]}},
            {"type": "Feature", "id": 430, "geometry": {"type": "Point", "coordinates":[56.900805, 35.981031]}},
            {"type": "Feature", "id": 431, "geometry": {"type": "Point", "coordinates":[56.868556, 35.964160]}},
            {"type": "Feature", "id": 432, "geometry": {"type": "Point", "coordinates":[56.785206, 35.952725]}},
            {"type": "Feature", "id": 433, "geometry": {"type": "Point", "coordinates":[56.743385, 36.045053]}},
            {"type": "Feature", "id": 434, "geometry": {"type": "Point", "coordinates":[56.807077, 36.074437]}},
            {"type": "Feature", "id": 435, "geometry": {"type": "Point", "coordinates":[56.725215, 35.937390]}},
            {"type": "Feature", "id": 436, "geometry": {"type": "Point", "coordinates":[56.719960, 35.355174]}},
            {"type": "Feature", "id": 437, "geometry": {"type": "Point", "coordinates":[56.992763, 36.055725]}},
            {"type": "Feature", "id": 438, "geometry": {"type": "Point", "coordinates":[56.785566, 35.788072]}},
            {"type": "Feature", "id": 439, "geometry": {"type": "Point", "coordinates":[56.600391, 35.701619]}},
            {"type": "Feature", "id": 440, "geometry": {"type": "Point", "coordinates":[56.942372, 35.690686]}},
            {"type": "Feature", "id": 441, "geometry": {"type": "Point", "coordinates":[56.946133, 35.881749]}},
            {"type": "Feature", "id": 442, "geometry": {"type": "Point", "coordinates":[56.884389, 35.990652]}},
            {"type": "Feature", "id": 443, "geometry": {"type": "Point", "coordinates":[56.878950, 35.989214]}},
            {"type": "Feature", "id": 444, "geometry": {"type": "Point", "coordinates":[56.779866, 35.795825]}},
            {"type": "Feature", "id": 445, "geometry": {"type": "Point", "coordinates":[56.901032, 35.989142]}},
            {"type": "Feature", "id": 446, "geometry": {"type": "Point", "coordinates":[57.135268, 35.615102]}},
            {"type": "Feature", "id": 447, "geometry": {"type": "Point", "coordinates":[56.858730, 36.020197]}},
            {"type": "Feature", "id": 448, "geometry": {"type": "Point", "coordinates":[56.758378, 35.834488]}},
            {"type": "Feature", "id": 449, "geometry": {"type": "Point", "coordinates":[56.611384, 35.971562]}},
            {"type": "Feature", "id": 450, "geometry": {"type": "Point", "coordinates":[56.934800, 35.957800]}},
            {"type": "Feature", "id": 451, "geometry": {"type": "Point", "coordinates":[56.894081, 35.604762]}},
            {"type": "Feature", "id": 452, "geometry": {"type": "Point", "coordinates":[56.823045, 35.612380]}},
            {"type": "Feature", "id": 453, "geometry": {"type": "Point", "coordinates":[56.864039, 36.014592]}},
            {"type": "Feature", "id": 454, "geometry": {"type": "Point", "coordinates":[56.853843, 35.984974]}},
            {"type": "Feature", "id": 455, "geometry": {"type": "Point", "coordinates":[56.716147, 35.890903]}},
            {"type": "Feature", "id": 456, "geometry": {"type": "Point", "coordinates":[57.108413, 35.492167]}},
            {"type": "Feature", "id": 457, "geometry": {"type": "Point", "coordinates":[56.649805, 35.288717]}},
            {"type": "Feature", "id": 458, "geometry": {"type": "Point", "coordinates":[56.898716, 35.791791]}},
            {"type": "Feature", "id": 459, "geometry": {"type": "Point", "coordinates":[56.948951, 35.657242]}},
            {"type": "Feature", "id": 460, "geometry": {"type": "Point", "coordinates":[56.858440, 36.574862]}},
            {"type": "Feature", "id": 461, "geometry": {"type": "Point", "coordinates":[56.710510, 36.073404]}},
            {"type": "Feature", "id": 462, "geometry": {"type": "Point", "coordinates":[56.841187, 35.605732]}},
            {"type": "Feature", "id": 463, "geometry": {"type": "Point", "coordinates":[56.959759, 35.883905]}},
            {"type": "Feature", "id": 464, "geometry": {"type": "Point", "coordinates":[56.839617, 35.290981]}},
            {"type": "Feature", "id": 465, "geometry": {"type": "Point", "coordinates":[56.834771, 36.025587]}},
            {"type": "Feature", "id": 466, "geometry": {"type": "Point", "coordinates":[56.817030, 35.201850]}},
            {"type": "Feature", "id": 467, "geometry": {"type": "Point", "coordinates":[56.755141, 36.361790]}},
            {"type": "Feature", "id": 468, "geometry": {"type": "Point", "coordinates":[57.084102, 35.515470]}},
            {"type": "Feature", "id": 469, "geometry": {"type": "Point", "coordinates":[56.551735, 36.005698]}},
            {"type": "Feature", "id": 470, "geometry": {"type": "Point", "coordinates":[56.626594, 35.562550]}},
            {"type": "Feature", "id": 471, "geometry": {"type": "Point", "coordinates":[56.857278, 35.582098]}},
            {"type": "Feature", "id": 472, "geometry": {"type": "Point", "coordinates":[56.961104, 34.911056]}},
            {"type": "Feature", "id": 473, "geometry": {"type": "Point", "coordinates":[56.705055, 35.259890]}},
            {"type": "Feature", "id": 474, "geometry": {"type": "Point", "coordinates":[56.947056, 35.807440]}},
            {"type": "Feature", "id": 475, "geometry": {"type": "Point", "coordinates":[56.774658, 35.800550]}},
            {"type": "Feature", "id": 476, "geometry": {"type": "Point", "coordinates":[56.927620, 35.894604]}},
            {"type": "Feature", "id": 477, "geometry": {"type": "Point", "coordinates":[56.809581, 36.086547]}},
            {"type": "Feature", "id": 478, "geometry": {"type": "Point", "coordinates":[56.949098, 35.717627]}},
            {"type": "Feature", "id": 479, "geometry": {"type": "Point", "coordinates":[56.943001, 35.704826]}},
            {"type": "Feature", "id": 480, "geometry": {"type": "Point", "coordinates":[56.894852, 35.991192]}},
            {"type": "Feature", "id": 481, "geometry": {"type": "Point", "coordinates":[56.981729, 36.067116]}},
            {"type": "Feature", "id": 482, "geometry": {"type": "Point", "coordinates":[57.001201, 35.250799]}},
            {"type": "Feature", "id": 483, "geometry": {"type": "Point", "coordinates":[56.920516, 36.175255]}},
            {"type": "Feature", "id": 484, "geometry": {"type": "Point", "coordinates":[56.670954, 35.254626]}},
            {"type": "Feature", "id": 485, "geometry": {"type": "Point", "coordinates":[56.967424, 35.579744]}},
            {"type": "Feature", "id": 486, "geometry": {"type": "Point", "coordinates":[56.738280, 35.836087]}},
            {"type": "Feature", "id": 487, "geometry": {"type": "Point", "coordinates":[56.927639, 35.762156]}},
            {"type": "Feature", "id": 488, "geometry": {"type": "Point", "coordinates":[56.697168, 36.103291]}},
            {"type": "Feature", "id": 489, "geometry": {"type": "Point", "coordinates":[56.785014, 36.334122]}},
            {"type": "Feature", "id": 490, "geometry": {"type": "Point", "coordinates":[56.495787, 35.998754]}},
            {"type": "Feature", "id": 491, "geometry": {"type": "Point", "coordinates":[56.628466, 35.942681]}},
            {"type": "Feature", "id": 492, "geometry": {"type": "Point", "coordinates":[56.854266, 35.467140]}},
            {"type": "Feature", "id": 493, "geometry": {"type": "Point", "coordinates":[56.943771, 35.935773]}},
            {"type": "Feature", "id": 494, "geometry": {"type": "Point", "coordinates":[56.889120, 35.993562]}},
            {"type": "Feature", "id": 495, "geometry": {"type": "Point", "coordinates":[56.880371, 35.986798]}},
            {"type": "Feature", "id": 496, "geometry": {"type": "Point", "coordinates":[56.946982, 35.635997]}},
            {"type": "Feature", "id": 497, "geometry": {"type": "Point", "coordinates":[56.945956, 35.739959]}},
            {"type": "Feature", "id": 498, "geometry": {"type": "Point", "coordinates":[57.105143, 35.383444]}},
            {"type": "Feature", "id": 499, "geometry": {"type": "Point", "coordinates":[56.717046, 35.747666]}},
            {"type": "Feature", "id": 500, "geometry": {"type": "Point", "coordinates":[56.725877, 36.097919]}},
            {"type": "Feature", "id": 501, "geometry": {"type": "Point", "coordinates":[56.906271, 35.299245]}},
            {"type": "Feature", "id": 502, "geometry": {"type": "Point", "coordinates":[56.579643, 35.992385]}},
            {"type": "Feature", "id": 503, "geometry": {"type": "Point", "coordinates":[56.647643, 35.660018]}},
            {"type": "Feature", "id": 504, "geometry": {"type": "Point", "coordinates":[56.811084, 35.310582]}},
            {"type": "Feature", "id": 505, "geometry": {"type": "Point", "coordinates":[57.010146, 35.633868]}},
            {"type": "Feature", "id": 506, "geometry": {"type": "Point", "coordinates":[56.941935, 35.703271]}},
            {"type": "Feature", "id": 507, "geometry": {"type": "Point", "coordinates":[56.749648, 35.464921]}},
            {"type": "Feature", "id": 508, "geometry": {"type": "Point", "coordinates":[56.569344, 36.020161]}},
            {"type": "Feature", "id": 509, "geometry": {"type": "Point", "coordinates":[56.868713, 35.655292]}},
            {"type": "Feature", "id": 510, "geometry": {"type": "Point", "coordinates":[56.687094, 35.911097]}},
            {"type": "Feature", "id": 511, "geometry": {"type": "Point", "coordinates":[56.733462, 35.686572]}},
            {"type": "Feature", "id": 512, "geometry": {"type": "Point", "coordinates":[56.943654, 35.646633]}},
            {"type": "Feature", "id": 513, "geometry": {"type": "Point", "coordinates":[56.741869, 36.023997]}},
            {"type": "Feature", "id": 514, "geometry": {"type": "Point", "coordinates":[56.840129, 35.697118]}},
            {"type": "Feature", "id": 515, "geometry": {"type": "Point", "coordinates":[56.922054, 35.993346]}},
            {"type": "Feature", "id": 516, "geometry": {"type": "Point", "coordinates":[56.838844, 36.380493]}},
            {"type": "Feature", "id": 517, "geometry": {"type": "Point", "coordinates":[56.775911, 36.122084]}},
            {"type": "Feature", "id": 518, "geometry": {"type": "Point", "coordinates":[56.780941, 36.114403]}},
            {"type": "Feature", "id": 519, "geometry": {"type": "Point", "coordinates":[56.778253, 36.135864]}},
            {"type": "Feature", "id": 520, "geometry": {"type": "Point", "coordinates":[56.854621, 36.026854]}},
            {"type": "Feature", "id": 521, "geometry": {"type": "Point", "coordinates":[56.942092, 35.015728]}},
            {"type": "Feature", "id": 522, "geometry": {"type": "Point", "coordinates":[56.781508, 36.264638]}},
            {"type": "Feature", "id": 523, "geometry": {"type": "Point", "coordinates":[56.828015, 35.090369]}},
            {"type": "Feature", "id": 524, "geometry": {"type": "Point", "coordinates":[56.976544, 35.897101]}},
            {"type": "Feature", "id": 525, "geometry": {"type": "Point", "coordinates":[56.991832, 34.985769]}},
            {"type": "Feature", "id": 526, "geometry": {"type": "Point", "coordinates":[56.690831, 35.325754]}},
            {"type": "Feature", "id": 527, "geometry": {"type": "Point", "coordinates":[56.944238, 35.435807]}},
            {"type": "Feature", "id": 527, "geometry": {"type": "Point", "coordinates":[56.818681, 35.540066]}},
            {"type": "Feature", "id": 527, "geometry": {"type": "Point", "coordinates":[56.991537, 35.940714]}}
        ]
    }

    objectManager.add(data);
    // objectManager.geoObjects
    //     .add(new ymaps.Placemark([56.852784, 36.002636], {}, {}))
    //     .add(new ymaps.Placemark([56.947558, 35.866167], {}, {}))
    //     .add(new ymaps.Placemark([56.858729, 36.004567], {}, {}))
    //     .add(new ymaps.Placemark([56.799249, 36.181878], {}, {}))
    //     .add(new ymaps.Placemark([56.677294, 36.073862], {}, {}))
    //     .add(new ymaps.Placemark([56.783153, 35.910202], {}, {}))
    //     .add(new ymaps.Placemark([56.641966, 35.257042], {}, {}))
    //     .add(new ymaps.Placemark([56.754161, 35.884822], {}, {}))
    //     .add(new ymaps.Placemark([57.076875, 35.350410], {}, {}))
    //     .add(new ymaps.Placemark([56.742141, 35.917412], {}, {}))
    //     .add(new ymaps.Placemark([56.776019, 36.291641], {}, {}))
    //     .add(new ymaps.Placemark([56.727052, 35.446425], {}, {}))
    //     .add(new ymaps.Placemark([56.781261, 35.944397], {}, {}))
    //     .add(new ymaps.Placemark([56.800646, 35.788504], {}, {}))
    //     .add(new ymaps.Placemark([57.005975, 35.235779], {}, {}))
    //     .add(new ymaps.Placemark([56.657010, 35.678658], {}, {}))
    //     .add(new ymaps.Placemark([56.706621, 35.607098], {}, {}))
    //     .add(new ymaps.Placemark([57.057382, 36.068877], {}, {}))
    //     .add(new ymaps.Placemark([56.713020, 35.805742], {}, {}))
    //     .add(new ymaps.Placemark([56.890270, 36.029063], {}, {}))
    //     .add(new ymaps.Placemark([56.637635, 35.527426], {}, {}))
    //     .add(new ymaps.Placemark([56.713380, 36.023997], {}, {}))
    //     .add(new ymaps.Placemark([56.923572, 36.007728], {}, {}))
    //     .add(new ymaps.Placemark([56.686565, 35.763315], {}, {}))
    //     .add(new ymaps.Placemark([56.874503, 36.044065], {}, {}))
    //     .add(new ymaps.Placemark([56.943473, 36.137988], {}, {}))
    //     .add(new ymaps.Placemark([56.980738, 35.130946], {}, {}))
    //     .add(new ymaps.Placemark([56.679015, 35.890750], {}, {}))
    //     .add(new ymaps.Placemark([56.991454, 35.928075], {}, {}))
    //     .add(new ymaps.Placemark([56.726465, 35.474515], {}, {}))
    //     .add(new ymaps.Placemark([56.789146, 35.933105], {}, {}))
    //     .add(new ymaps.Placemark([56.633100, 35.618497], {}, {}))
    //     .add(new ymaps.Placemark([56.782701, 35.792869], {}, {}))
    //     .add(new ymaps.Placemark([56.989306, 35.726232], {}, {}))
    //     .add(new ymaps.Placemark([56.826769, 35.587533], {}, {}))
    //     .add(new ymaps.Placemark([56.847936, 35.674175], {}, {}))
    //     .add(new ymaps.Placemark([56.823439, 36.004620], {}, {}))
    //     .add(new ymaps.Placemark([56.939063, 35.803811], {}, {}))
    //     .add(new ymaps.Placemark([56.867124, 36.567936], {}, {}))
    //     .add(new ymaps.Placemark([57.005171, 34.918422], {}, {}))
    //     .add(new ymaps.Placemark([56.834737, 35.817178], {}, {}))
    //     .add(new ymaps.Placemark([56.792404, 35.930752], {}, {}))
    //     .add(new ymaps.Placemark([56.874666, 36.553760], {}, {}))
    //     .add(new ymaps.Placemark([56.918345, 35.195831], {}, {}))
    //     .add(new ymaps.Placemark([56.660611, 35.275027], {}, {}))
    //     .add(new ymaps.Placemark([56.815272, 35.863549], {}, {}))
    //     .add(new ymaps.Placemark([56.900941, 35.795756], {}, {}))
    //     .add(new ymaps.Placemark([56.997975, 35.069465], {}, {}))
    //     .add(new ymaps.Placemark([56.989586, 35.158219], {}, {}))
    //     .add(new ymaps.Placemark([56.970947, 35.433274], {}, {}))
    //     .add(new ymaps.Placemark([56.736138, 35.884381], {}, {}))
    //     .add(new ymaps.Placemark([56.684375, 35.304545], {}, {}))
    //     .add(new ymaps.Placemark([56.900206, 35.264507], {}, {}))
    //     .add(new ymaps.Placemark([56.941238, 35.252380], {}, {}))
    //     .add(new ymaps.Placemark([57.015606, 35.917151], {}, {}))
    //     .add(new ymaps.Placemark([56.985981, 35.898727], {}, {}))
    //     .add(new ymaps.Placemark([56.638832, 35.160285], {}, {}))
    //     .add(new ymaps.Placemark([56.986889, 35.335726], {}, {}))
    //     .add(new ymaps.Placemark([56.689066, 35.856578], {}, {}))
    //     .add(new ymaps.Placemark([56.975284, 35.737821], {}, {}))
    //     .add(new ymaps.Placemark([56.778411, 35.784946], {}, {}))
    //     .add(new ymaps.Placemark([56.934127, 35.689348], {}, {}))
    //     .add(new ymaps.Placemark([56.623024, 35.965975], {}, {}))
    //     .add(new ymaps.Placemark([57.067498, 35.463089], {}, {}))
    //     .add(new ymaps.Placemark([56.876382, 35.950084], {}, {}))
    //     .add(new ymaps.Placemark([56.768719, 35.804521], {}, {}))
    //     .add(new ymaps.Placemark([56.929707, 35.731074], {}, {}))
    //     .add(new ymaps.Placemark([56.701215, 36.385057], {}, {}))
    //     .add(new ymaps.Placemark([56.650414, 36.326541], {}, {}))
    //     .add(new ymaps.Placemark([57.126543, 35.399371], {}, {}))
    //     .add(new ymaps.Placemark([56.865274, 35.781542], {}, {}))
    //     .add(new ymaps.Placemark([56.883027, 35.982153], {}, {}))
    //     .add(new ymaps.Placemark([56.778426, 35.968239], {}, {}))
    //     .add(new ymaps.Placemark([56.960780, 35.863333], {}, {}))
    //     .add(new ymaps.Placemark([57.084259, 35.381675], {}, {}))
    //     .add(new ymaps.Placemark([57.053999, 35.474435], {}, {}))
    //     .add(new ymaps.Placemark([56.970731, 35.853838], {}, {}))
    //     .add(new ymaps.Placemark([57.001573, 35.035194], {}, {}))
    //     .add(new ymaps.Placemark([56.881566, 35.982207], {}, {}))
    //     .add(new ymaps.Placemark([56.802913, 36.114745], {}, {}))
    //     .add(new ymaps.Placemark([56.724529, 35.369062], {}, {}))
    //     .add(new ymaps.Placemark([56.834565, 35.671929], {}, {}))
    //     .add(new ymaps.Placemark([56.547810, 36.018571], {}, {}))
    //     .add(new ymaps.Placemark([56.710648, 35.633239], {}, {}))
    //     .add(new ymaps.Placemark([56.776128, 35.934192], {}, {}))
    //     .add(new ymaps.Placemark([57.103422, 35.448949], {}, {}))
    //     .add(new ymaps.Placemark([56.739396, 36.247246], {}, {}))
    //     .add(new ymaps.Placemark([57.010465, 36.158672], {}, {}))
    //     .add(new ymaps.Placemark([56.841537, 36.015382], {}, {}))
    //     .add(new ymaps.Placemark([57.024161, 35.091842], {}, {}))
    //     .add(new ymaps.Placemark([56.854542, 36.018895], {}, {}))
    //     .add(new ymaps.Placemark([56.830408, 36.475616], {}, {}))
    //     .add(new ymaps.Placemark([57.024837, 35.479528], {}, {}))
    //     .add(new ymaps.Placemark([57.018766, 35.113051], {}, {}))
    //     .add(new ymaps.Placemark([56.778036, 36.062373], {}, {}))
    //     .add(new ymaps.Placemark([56.806979, 35.532843], {}, {}))
    //     .add(new ymaps.Placemark([56.605796, 35.712165], {}, {}))
    //     .add(new ymaps.Placemark([56.902796, 35.925811], {}, {}))
    //     .add(new ymaps.Placemark([56.585622, 35.994254], {}, {}))
    //     .add(new ymaps.Placemark([56.952898, 35.624884], {}, {}))
    //     .add(new ymaps.Placemark([56.826665, 35.804601], {}, {}))
    //     .add(new ymaps.Placemark([57.026385, 35.507708], {}, {}))
    //     .add(new ymaps.Placemark([56.891298, 35.564634], {}, {}))
    //     .add(new ymaps.Placemark([56.995200, 35.013644], {}, {}))
    //     .add(new ymaps.Placemark([56.958861, 35.565147], {}, {}))
    //     .add(new ymaps.Placemark([56.941503, 36.093715], {}, {}))
    //     .add(new ymaps.Placemark([56.981837, 34.911487], {}, {}))
    //     .add(new ymaps.Placemark([57.110994, 35.395563], {}, {}))
    //     .add(new ymaps.Placemark([57.086289, 35.527732], {}, {}))
    //     .add(new ymaps.Placemark([56.942293, 35.856659], {}, {}))
    //     .add(new ymaps.Placemark([56.749125, 36.190455], {}, {}))
    //     .add(new ymaps.Placemark([56.871827, 35.684299], {}, {}))
    //     .add(new ymaps.Placemark([56.788998, 36.092682], {}, {}))
    //     .add(new ymaps.Placemark([56.891504, 36.058367], {}, {}))
    //     .add(new ymaps.Placemark([56.791197, 35.967601], {}, {}))
    //     .add(new ymaps.Placemark([56.805816, 36.105034], {}, {}))
    //     .add(new ymaps.Placemark([56.735703, 35.901961], {}, {}))
    //     .add(new ymaps.Placemark([56.654422, 35.945709], {}, {}))
    //     .add(new ymaps.Placemark([56.936200, 35.045049], {}, {}))
    //     .add(new ymaps.Placemark([56.705925, 35.913567], {}, {}))
    //     .add(new ymaps.Placemark([56.774983, 36.069946], {}, {}))
    //     .add(new ymaps.Placemark([57.060446, 35.403602], {}, {}))
    //     .add(new ymaps.Placemark([56.699575, 35.629565], {}, {}))
    //     .add(new ymaps.Placemark([56.838622, 35.029822], {}, {}))
    //     .add(new ymaps.Placemark([56.996416, 35.725604], {}, {}))
    //     .add(new ymaps.Placemark([57.040922, 36.152339], {}, {}))
    //     .add(new ymaps.Placemark([56.799852, 35.749867], {}, {}))
    //     .add(new ymaps.Placemark([57.117773, 35.548644], {}, {}))
    //     .add(new ymaps.Placemark([56.833215, 35.806165], {}, {}))
    //     .add(new ymaps.Placemark([56.696323, 35.288780], {}, {}))
    //     .add(new ymaps.Placemark([56.859040, 35.749077], {}, {}))
    //     .add(new ymaps.Placemark([56.848448, 35.739779], {}, {}))
    //     .add(new ymaps.Placemark([56.987972, 35.441466], {}, {}))
    //     .add(new ymaps.Placemark([56.927482, 35.913899], {}, {}))
    //     .add(new ymaps.Placemark([56.834880, 36.015211], {}, {}))
    //     .add(new ymaps.Placemark([56.874715, 35.523941], {}, {}))
    //     .add(new ymaps.Placemark([56.930129, 35.265469], {}, {}))
    //     .add(new ymaps.Placemark([57.137241, 35.690992], {}, {}))
    //     .add(new ymaps.Placemark([56.890939, 35.985648], {}, {}))
    //     .add(new ymaps.Placemark([56.930959, 35.917322], {}, {}))
    //     .add(new ymaps.Placemark([56.967326, 35.800658], {}, {}))
    //     .add(new ymaps.Placemark([56.984137, 35.238286], {}, {}))
    //     .add(new ymaps.Placemark([56.730864, 35.535125], {}, {}))
    //     .add(new ymaps.Placemark([56.922540, 35.868508], {}, {}))
    //     .add(new ymaps.Placemark([56.850132, 35.648780], {}, {}))
    //     .add(new ymaps.Placemark([56.994543, 35.181126], {}, {}))
    //     .add(new ymaps.Placemark([56.805348, 35.109404], {}, {}))
    //     .add(new ymaps.Placemark([57.002618, 35.720834], {}, {}))
    //     .add(new ymaps.Placemark([56.645331, 35.925658], {}, {}))
    //     .add(new ymaps.Placemark([56.818395, 35.114974], {}, {}))
    //     .add(new ymaps.Placemark([56.884551, 36.015310], {}, {}))
    //     .add(new ymaps.Placemark([56.982970, 35.297691], {}, {}))
    //     .add(new ymaps.Placemark([56.666028, 35.972209], {}, {}))
    //     .add(new ymaps.Placemark([57.034555, 35.735943], {}, {}))
    //     .add(new ymaps.Placemark([56.713054, 35.311732], {}, {}))
    //     .add(new ymaps.Placemark([56.943398, 35.918714], {}, {}))
    //     .add(new ymaps.Placemark([56.793366, 36.238685], {}, {}))
    //     .add(new ymaps.Placemark([56.690673, 35.398940], {}, {}))
    //     .add(new ymaps.Placemark([56.890486, 35.753460], {}, {}))
    //     .add(new ymaps.Placemark([56.852465, 35.754628], {}, {}))
    //     .add(new ymaps.Placemark([56.900771, 35.975003], {}, {}))
    //     .add(new ymaps.Placemark([56.916178, 35.965445], {}, {}))
    //     .add(new ymaps.Placemark([56.664589, 35.661796], {}, {}))
    //     .add(new ymaps.Placemark([56.639525, 35.730374], {}, {}))
    //     .add(new ymaps.Placemark([57.080668, 35.751655], {}, {}))
    //     .add(new ymaps.Placemark([56.854955, 36.002357], {}, {}))
    //     .add(new ymaps.Placemark([56.856555, 36.018913], {}, {}))
    //     .add(new ymaps.Placemark([56.731383, 35.868382], {}, {}))
    //     .add(new ymaps.Placemark([56.719777, 35.979575], {}, {}))
    //     .add(new ymaps.Placemark([56.878242, 35.016905], {}, {}))
    //     .add(new ymaps.Placemark([56.872575, 35.641324], {}, {}))
    //     .add(new ymaps.Placemark([56.931387, 35.314723], {}, {}))
    //     .add(new ymaps.Placemark([56.935370, 35.948817], {}, {}))
    //     .add(new ymaps.Placemark([56.935350, 35.972892], {}, {}))
    //     .add(new ymaps.Placemark([56.534232, 35.990436], {}, {}))
    //     .add(new ymaps.Placemark([56.908989, 35.939771], {}, {}))
    //     .add(new ymaps.Placemark([56.732775, 35.373635], {}, {}))
    //     .add(new ymaps.Placemark([56.739347, 35.971985], {}, {}))
    //     .add(new ymaps.Placemark([56.779881, 36.316381], {}, {}))
    //     .add(new ymaps.Placemark([56.658924, 35.234036], {}, {}))
    //     .add(new ymaps.Placemark([56.818252, 36.005132], {}, {}))
    //     .add(new ymaps.Placemark([56.735037, 35.483804], {}, {}))
    //     .add(new ymaps.Placemark([56.950237, 35.875856], {}, {}))
    //     .add(new ymaps.Placemark([56.666661, 35.955725], {}, {}))
    //     .add(new ymaps.Placemark([56.836175, 36.262688], {}, {}))
    //     .add(new ymaps.Placemark([57.091947, 35.372862], {}, {}))
    //     .add(new ymaps.Placemark([56.781005, 36.203157], {}, {}))
    //     .add(new ymaps.Placemark([56.886686, 35.992816], {}, {}))
    //     .add(new ymaps.Placemark([56.834309, 36.212203], {}, {}))
    //     .add(new ymaps.Placemark([56.923935, 35.635386], {}, {}))
    //     .add(new ymaps.Placemark([56.725798, 35.338016], {}, {}))
    //     .add(new ymaps.Placemark([56.797186, 35.722756], {}, {}))
    //     .add(new ymaps.Placemark([56.539051, 35.961313], {}, {}))
    //     .add(new ymaps.Placemark([56.716967, 35.833177], {}, {}))
    //     .add(new ymaps.Placemark([56.759148, 35.805015], {}, {}))
    //     .add(new ymaps.Placemark([56.856122, 36.468133], {}, {}))
    //     .add(new ymaps.Placemark([56.972860, 35.548510], {}, {}))
    //     .add(new ymaps.Placemark([56.693486, 35.832656], {}, {}))
    //     .add(new ymaps.Placemark([57.004402, 35.727822], {}, {}))
    //     .add(new ymaps.Placemark([56.638486, 35.333004], {}, {}))
    //     .add(new ymaps.Placemark([56.961629, 35.791109], {}, {}))
    //     .add(new ymaps.Placemark([56.825779, 35.243954], {}, {}))
    //     .add(new ymaps.Placemark([56.938400, 35.688144], {}, {}))
    //     .add(new ymaps.Placemark([57.119727, 35.692303], {}, {}))
    //     .add(new ymaps.Placemark([56.931475, 35.656909], {}, {}))
    //     .add(new ymaps.Placemark([56.688928, 36.017331], {}, {}))
    //     .add(new ymaps.Placemark([56.759187, 36.114332], {}, {}))
    //     .add(new ymaps.Placemark([56.956814, 36.159490], {}, {}))
    //     .add(new ymaps.Placemark([56.776862, 35.954036], {}, {}))
    //     .add(new ymaps.Placemark([56.917082, 36.049886], {}, {}))
    //     .add(new ymaps.Placemark([56.913259, 36.046922], {}, {}))
    //     .add(new ymaps.Placemark([56.679806, 35.510053], {}, {}))
    //     .add(new ymaps.Placemark([56.792256, 35.991586], {}, {}))
    //     .add(new ymaps.Placemark([57.082630, 35.424677], {}, {}))
    //     .add(new ymaps.Placemark([56.747842, 36.320288], {}, {}))
    //     .add(new ymaps.Placemark([56.999470, 34.898462], {}, {}))
    //     .add(new ymaps.Placemark([56.909235, 35.040414], {}, {}))
    //     .add(new ymaps.Placemark([56.720133, 35.813683], {}, {}))
    //     .add(new ymaps.Placemark([56.729087, 35.380839], {}, {}))
    //     .add(new ymaps.Placemark([56.720113, 36.267988], {}, {}))
    //     .add(new ymaps.Placemark([56.766775, 35.912696], {}, {}))
    //     .add(new ymaps.Placemark([56.720202, 35.601079], {}, {}))
    //     .add(new ymaps.Placemark([56.517321, 35.971203], {}, {}))
    //     .add(new ymaps.Placemark([56.719293, 35.961932], {}, {}))
    //     .add(new ymaps.Placemark([56.836938, 35.667734], {}, {}))
    //     .add(new ymaps.Placemark([56.832014, 35.671570], {}, {}))
    //     .add(new ymaps.Placemark([56.946369, 35.685224], {}, {}))
    //     .add(new ymaps.Placemark([56.964127, 34.858918], {}, {}))
    //     .add(new ymaps.Placemark([56.846450, 35.035644], {}, {}))
    //     .add(new ymaps.Placemark([56.811724, 35.850371], {}, {}))
    //     .add(new ymaps.Placemark([56.935252, 35.792609], {}, {}))
    //     .add(new ymaps.Placemark([56.932978, 35.334324], {}, {}))
    //     .add(new ymaps.Placemark([56.815912, 36.167179], {}, {}))
    //     .add(new ymaps.Placemark([56.967807, 35.616970], {}, {}))
    //     .add(new ymaps.Placemark([56.929809, 35.479156], {}, {}))
    //     .add(new ymaps.Placemark([57.059179, 35.530713], {}, {}))
    //     .add(new ymaps.Placemark([56.974018, 35.877706], {}, {}))
    //     .add(new ymaps.Placemark([56.709991, 36.106166], {}, {}))
    //     .add(new ymaps.Placemark([56.730218, 36.134795], {}, {}))
    //     .add(new ymaps.Placemark([56.977569, 35.683007], {}, {}))
    //     .add(new ymaps.Placemark([56.725946, 35.426761], {}, {}))
    //     .add(new ymaps.Placemark([56.853597, 35.398922], {}, {}))
    //     .add(new ymaps.Placemark([56.610329, 35.581559], {}, {}))
    //     .add(new ymaps.Placemark([56.844707, 36.323630], {}, {}))
    //     .add(new ymaps.Placemark([56.700178, 35.952967], {}, {}))
    //     .add(new ymaps.Placemark([56.747946, 35.602851], {}, {}))
    //     .add(new ymaps.Placemark([56.920963, 35.113545], {}, {}))
    //     .add(new ymaps.Placemark([56.779530, 35.834354], {}, {}))
    //     .add(new ymaps.Placemark([56.966570, 35.745456], {}, {}))
    //     .add(new ymaps.Placemark([56.638828, 35.251176], {}, {}))
    //     .add(new ymaps.Placemark([56.727497, 35.389301], {}, {}))
    //     .add(new ymaps.Placemark([56.779915, 35.863540], {}, {}))
    //     .add(new ymaps.Placemark([56.761970, 36.372705], {}, {}))
    //     .add(new ymaps.Placemark([56.578423, 35.925631], {}, {}))
    //     .add(new ymaps.Placemark([56.929776, 35.924455], {}, {}))
    //     .add(new ymaps.Placemark([56.859635, 35.127038], {}, {}))
    //     .add(new ymaps.Placemark([56.774105, 36.352960], {}, {}))
    //     .add(new ymaps.Placemark([56.912699, 35.879844], {}, {}))
    //     .add(new ymaps.Placemark([56.852593, 36.426963], {}, {}))
    //     .add(new ymaps.Placemark([56.838031, 35.611167], {}, {}))
    //     .add(new ymaps.Placemark([56.620062, 35.201221], {}, {}))
    //     .add(new ymaps.Placemark([56.862632, 36.039709], {}, {}))
    //     .add(new ymaps.Placemark([56.708232, 36.232541], {}, {}))
    //     .add(new ymaps.Placemark([56.652200, 36.013100], {}, {}))
    //     .add(new ymaps.Placemark([56.763179, 35.813486], {}, {}))
    //     .add(new ymaps.Placemark([56.697375, 35.711958], {}, {}))
    //     .add(new ymaps.Placemark([56.851077, 36.036322], {}, {}))
    //     .add(new ymaps.Placemark([56.843383, 36.035001], {}, {}))
    //     .add(new ymaps.Placemark([56.915883, 35.248311], {}, {}))
    //     .add(new ymaps.Placemark([57.033874, 35.745331], {}, {}))
    //     .add(new ymaps.Placemark([56.915578, 35.108847], {}, {}))
    //     .add(new ymaps.Placemark([56.960363, 35.748160], {}, {}))
    //     .add(new ymaps.Placemark([56.709003, 36.250390], {}, {}))
    //     .add(new ymaps.Placemark([56.712802, 36.196114], {}, {}))
    //     .add(new ymaps.Placemark([56.864753, 35.772666], {}, {}))
    //     .add(new ymaps.Placemark([56.864703, 35.763288], {}, {}))
    //     .add(new ymaps.Placemark([56.861092, 35.760593], {}, {}))
    //     .add(new ymaps.Placemark([56.942465, 35.787875], {}, {}))
    //     .add(new ymaps.Placemark([57.022465, 36.115670], {}, {}))
    //     .add(new ymaps.Placemark([56.978345, 35.914367], {}, {}))
    //     .add(new ymaps.Placemark([56.900879, 35.984741], {}, {}))
    //     .add(new ymaps.Placemark([56.869496, 35.962058], {}, {}))
    //     .add(new ymaps.Placemark([57.001485, 35.158937], {}, {}))
    //     .add(new ymaps.Placemark([56.988492, 35.212225], {}, {}))
    //     .add(new ymaps.Placemark([56.729032, 36.166200], {}, {}))
    //     .add(new ymaps.Placemark([56.777247, 35.945421], {}, {}))
    //     .add(new ymaps.Placemark([56.970888, 35.887902], {}, {}))
    //     .add(new ymaps.Placemark([57.003990, 35.471470], {}, {}))
    //     .add(new ymaps.Placemark([56.868516, 36.022155], {}, {}))
    //     .add(new ymaps.Placemark([57.011396, 35.157464], {}, {}))
    //     .add(new ymaps.Placemark([56.767155, 35.882162], {}, {}))
    //     .add(new ymaps.Placemark([56.733872, 35.509119], {}, {}))
    //     .add(new ymaps.Placemark([56.833954, 35.651744], {}, {}))
    //     .add(new ymaps.Placemark([56.830379, 35.044052], {}, {}))
    //     .add(new ymaps.Placemark([56.940256, 35.485700], {}, {}))
    //     .add(new ymaps.Placemark([57.096172, 35.574579], {}, {}))
    //     .add(new ymaps.Placemark([57.069602, 35.746238], {}, {}))
    //     .add(new ymaps.Placemark([56.929481, 35.384962], {}, {}))
    //     .add(new ymaps.Placemark([56.827084, 35.602202], {}, {}))
    //     .add(new ymaps.Placemark([56.753819, 36.142646], {}, {}))
    //     .add(new ymaps.Placemark([56.769237, 35.795079], {}, {}))
    //     .add(new ymaps.Placemark([57.004995, 36.074581], {}, {}))
    //     .add(new ymaps.Placemark([56.770189, 35.874832], {}, {}))
    //     .add(new ymaps.Placemark([56.999681, 36.072138], {}, {}))
    //     .add(new ymaps.Placemark([56.783150, 35.910207], {}, {}))
    //     .add(new ymaps.Placemark([56.745784, 35.638584], {}, {}))
    //     .add(new ymaps.Placemark([56.709156, 35.326105], {}, {}))
    //     .add(new ymaps.Placemark([56.933435, 36.152214], {}, {}))
    //     .add(new ymaps.Placemark([56.845889, 36.034031], {}, {}))
    //     .add(new ymaps.Placemark([56.968651, 35.866352], {}, {}))
    //     .add(new ymaps.Placemark([56.875035, 35.795340], {}, {}))
    //     .add(new ymaps.Placemark([56.826695, 35.821849], {}, {}))
    //     .add(new ymaps.Placemark([56.807462, 35.836905], {}, {}))
    //     .add(new ymaps.Placemark([56.830477, 36.401209], {}, {}))
    //     .add(new ymaps.Placemark([56.941292, 36.122973], {}, {}))
    //     .add(new ymaps.Placemark([56.837435, 34.985338], {}, {}))
    //     .add(new ymaps.Placemark([56.943899, 35.894433], {}, {}))
    //     .add(new ymaps.Placemark([56.873436, 35.553424], {}, {}))
    //     .add(new ymaps.Placemark([56.662605, 35.307357], {}, {}))
    //     .add(new ymaps.Placemark([57.009186, 34.923669], {}, {}))
    //     .add(new ymaps.Placemark([56.902005, 35.800793], {}, {}))
    //     .add(new ymaps.Placemark([56.726860, 35.983636], {}, {}))
    //     .add(new ymaps.Placemark([56.835274, 35.716432], {}, {}))
    //     .add(new ymaps.Placemark([56.777346, 36.213308], {}, {}))
    //     .add(new ymaps.Placemark([56.963346, 35.604502], {}, {}))
    //     .add(new ymaps.Placemark([57.088895, 35.744558], {}, {}))
    //     .add(new ymaps.Placemark([56.944375, 35.664401], {}, {}))
    //     .add(new ymaps.Placemark([57.086778, 35.445680], {}, {}))
    //     .add(new ymaps.Placemark([56.990699, 35.903048], {}, {}))
    //     .add(new ymaps.Placemark([56.799246, 36.181876], {}, {}))
    //     .add(new ymaps.Placemark([56.829428, 36.083097], {}, {}))
    //     .add(new ymaps.Placemark([56.910851, 36.227043], {}, {}))
    //     .add(new ymaps.Placemark([56.861367, 36.024159], {}, {}))
    //     .add(new ymaps.Placemark([56.900491, 36.031579], {}, {}))
    //     .add(new ymaps.Placemark([56.726015, 36.016837], {}, {}))
    //     .add(new ymaps.Placemark([56.928862, 35.320652], {}, {}))
    //     .add(new ymaps.Placemark([57.034065, 35.404061], {}, {}))
    //     .add(new ymaps.Placemark([56.852145, 35.671525], {}, {}))
    //     .add(new ymaps.Placemark([56.759148, 36.333458], {}, {}))
    //     .add(new ymaps.Placemark([56.749244, 36.160433], {}, {}))
    //     .add(new ymaps.Placemark([56.940010, 35.819612], {}, {}))
    //     .add(new ymaps.Placemark([56.980351, 35.747657], {}, {}))
    //     .add(new ymaps.Placemark([56.821607, 35.841369], {}, {}))
    //     .add(new ymaps.Placemark([56.999480, 35.095876], {}, {}))
    //     .add(new ymaps.Placemark([56.958154, 36.120153], {}, {}))
    //     .add(new ymaps.Placemark([56.961742, 36.147893], {}, {}))
    //     .add(new ymaps.Placemark([56.791852, 36.068185], {}, {}))
    //     .add(new ymaps.Placemark([56.750779, 35.581684], {}, {}))
    //     .add(new ymaps.Placemark([56.941591, 35.738566], {}, {}))
    //     .add(new ymaps.Placemark([57.127682, 35.676124], {}, {}))
    //     .add(new ymaps.Placemark([56.967929, 35.751313], {}, {}))
    //     .add(new ymaps.Placemark([56.905288, 35.800011], {}, {}))
    //     .add(new ymaps.Placemark([56.870450, 36.014250], {}, {}))
    //     .add(new ymaps.Placemark([56.663693, 35.703775], {}, {}))
    //     .add(new ymaps.Placemark([56.909814, 35.143998], {}, {}))
    //     .add(new ymaps.Placemark([56.718004, 35.858411], {}, {}))
    //     .add(new ymaps.Placemark([57.056696, 35.448366], {}, {}))
    //     .add(new ymaps.Placemark([56.894543, 35.085832], {}, {}))
    //     .add(new ymaps.Placemark([56.872624, 36.024015], {}, {}))
    //     .add(new ymaps.Placemark([56.651700, 35.516251], {}, {}))
    //     .add(new ymaps.Placemark([56.499692, 35.971320], {}, {}))
    //     .add(new ymaps.Placemark([56.638070, 35.902491], {}, {}))
    //     .add(new ymaps.Placemark([56.914920, 35.586607], {}, {}))
    //     .add(new ymaps.Placemark([56.798472, 36.102761], {}, {}))
    //     .add(new ymaps.Placemark([56.631763, 35.904566], {}, {}))
    //     .add(new ymaps.Placemark([56.885535, 35.983249], {}, {}))
    //     .add(new ymaps.Placemark([57.013337, 36.082675], {}, {}))
    //     .add(new ymaps.Placemark([57.094881, 35.595743], {}, {}))
    //     .add(new ymaps.Placemark([56.729378, 36.010998], {}, {}))
    //     .add(new ymaps.Placemark([56.935851, 36.083960], {}, {}))
    //     .add(new ymaps.Placemark([56.934491, 35.418200], {}, {}))
    //     .add(new ymaps.Placemark([56.930935, 35.429896], {}, {}))
    //     .add(new ymaps.Placemark([56.732380, 35.653343], {}, {}))
    //     .add(new ymaps.Placemark([56.769262, 36.098234], {}, {}))
    //     .add(new ymaps.Placemark([56.675208, 35.263861], {}, {}))
    //     .add(new ymaps.Placemark([56.949933, 35.765165], {}, {}))
    //     .add(new ymaps.Placemark([56.828369, 35.627552], {}, {}))
    //     .add(new ymaps.Placemark([57.033825, 35.456298], {}, {}))
    //     .add(new ymaps.Placemark([56.928818, 35.964448], {}, {}))
    //     .add(new ymaps.Placemark([56.755368, 35.552381], {}, {}))
    //     .add(new ymaps.Placemark([56.760821, 35.568425], {}, {}))
    //     .add(new ymaps.Placemark([56.591589, 35.760907], {}, {}))
    //     .add(new ymaps.Placemark([57.061517, 35.354195], {}, {}))
    //     .add(new ymaps.Placemark([56.540843, 35.986708], {}, {}))
    //     .add(new ymaps.Placemark([56.818021, 35.238411], {}, {}))
    //     .add(new ymaps.Placemark([56.967581, 35.976099], {}, {}))
    //     .add(new ymaps.Placemark([56.953850, 35.794334], {}, {}))
    //     .add(new ymaps.Placemark([56.956927, 35.252470], {}, {}))
    //     .add(new ymaps.Placemark([56.633258, 35.171684], {}, {}))
    //     .add(new ymaps.Placemark([56.773139, 35.854197], {}, {}))
    //     .add(new ymaps.Placemark([56.886892, 35.998090], {}, {}))
    //     .add(new ymaps.Placemark([56.886882, 36.002330], {}, {}))
    //     .add(new ymaps.Placemark([56.924250, 36.062562], {}, {}))
    //     .add(new ymaps.Placemark([56.757682, 35.841450], {}, {}))
    //     .add(new ymaps.Placemark([56.857071, 36.554048], {}, {}))
    //     .add(new ymaps.Placemark([56.837849, 35.324928], {}, {}))
    //     .add(new ymaps.Placemark([56.958395, 35.523968], {}, {}))
    //     .add(new ymaps.Placemark([56.959764, 36.167494], {}, {}))
    //     .add(new ymaps.Placemark([56.937378, 35.957414], {}, {}))
    //     .add(new ymaps.Placemark([56.708840, 35.498797], {}, {}))
    //     .add(new ymaps.Placemark([57.021324, 35.477669], {}, {}))
    //     .add(new ymaps.Placemark([56.946432, 35.826637], {}, {}))
    //     .add(new ymaps.Placemark([56.702466, 35.264894], {}, {}))
    //     .add(new ymaps.Placemark([56.863518, 36.005779], {}, {}))
    //     .add(new ymaps.Placemark([56.700978, 35.757790], {}, {}))
    //     .add(new ymaps.Placemark([56.837140, 36.104917], {}, {}))
    //     .add(new ymaps.Placemark([56.721491, 35.757278], {}, {}))
    //     .add(new ymaps.Placemark([56.875758, 35.602885], {}, {}))
    //     .add(new ymaps.Placemark([56.951194, 35.177398], {}, {}))
    //     .add(new ymaps.Placemark([56.965942, 35.163671], {}, {}))
    //     .add(new ymaps.Placemark([56.980694, 36.055869], {}, {}))
    //     .add(new ymaps.Placemark([56.739910, 36.034328], {}, {}))
    //     .add(new ymaps.Placemark([56.791719, 35.943086], {}, {}))
    //     .add(new ymaps.Placemark([56.907136, 35.811824], {}, {}))
    //     .add(new ymaps.Placemark([56.551283, 36.032756], {}, {}))
    //     .add(new ymaps.Placemark([56.887099, 36.066927], {}, {}))
    //     .add(new ymaps.Placemark([56.990807, 35.062404], {}, {}))
    //     .add(new ymaps.Placemark([56.897492, 36.049446], {}, {}))
    //     .add(new ymaps.Placemark([56.929697, 35.885351], {}, {}))
    //     .add(new ymaps.Placemark([56.967503, 35.277120], {}, {}))
    //     .add(new ymaps.Placemark([56.885746, 35.134880], {}, {}))
    //     .add(new ymaps.Placemark([56.705035, 35.828335], {}, {}))
    //     .add(new ymaps.Placemark([56.950276, 35.301734], {}, {}))
    //     .add(new ymaps.Placemark([56.827202, 35.019824], {}, {}))
    //     .add(new ymaps.Placemark([56.884355, 35.460708], {}, {}))
    //     .add(new ymaps.Placemark([57.010288, 34.974998], {}, {}))
    //     .add(new ymaps.Placemark([56.721679, 36.186493], {}, {}))
    //     .add(new ymaps.Placemark([56.768630, 36.377583], {}, {}))
    //     .add(new ymaps.Placemark([56.716147, 35.418613], {}, {}))
    //     .add(new ymaps.Placemark([56.900805, 35.981031], {}, {}))
    //     .add(new ymaps.Placemark([56.868556, 35.964160], {}, {}))
    //     .add(new ymaps.Placemark([56.785206, 35.952725], {}, {}))
    //     .add(new ymaps.Placemark([56.743385, 36.045053], {}, {}))
    //     .add(new ymaps.Placemark([56.807077, 36.074437], {}, {}))
    //     .add(new ymaps.Placemark([56.725215, 35.937390], {}, {}))
    //     .add(new ymaps.Placemark([56.719960, 35.355174], {}, {}))
    //     .add(new ymaps.Placemark([56.992763, 36.055725], {}, {}))
    //     .add(new ymaps.Placemark([56.785566, 35.788072], {}, {}))
    //     .add(new ymaps.Placemark([56.600391, 35.701619], {}, {}))
    //     .add(new ymaps.Placemark([56.942372, 35.690686], {}, {}))
    //     .add(new ymaps.Placemark([56.946133, 35.881749], {}, {}))
    //     .add(new ymaps.Placemark([56.884389, 35.990652], {}, {}))
    //     .add(new ymaps.Placemark([56.878950, 35.989214], {}, {}))
    //     .add(new ymaps.Placemark([56.779866, 35.795825], {}, {}))
    //     .add(new ymaps.Placemark([56.901032, 35.989142], {}, {}))
    //     .add(new ymaps.Placemark([57.135268, 35.615102], {}, {}))
    //     .add(new ymaps.Placemark([56.858730, 36.020197], {}, {}))
    //     .add(new ymaps.Placemark([56.758378, 35.834488], {}, {}))
    //     .add(new ymaps.Placemark([56.611384, 35.971562], {}, {}))
    //     .add(new ymaps.Placemark([56.934800, 35.957800], {}, {}))
    //     .add(new ymaps.Placemark([56.894081, 35.604762], {}, {}))
    //     .add(new ymaps.Placemark([56.823045, 35.612380], {}, {}))
    //     .add(new ymaps.Placemark([56.864039, 36.014592], {}, {}))
    //     .add(new ymaps.Placemark([56.853843, 35.984974], {}, {}))
    //     .add(new ymaps.Placemark([56.716147, 35.890903], {}, {}))
    //     .add(new ymaps.Placemark([57.108413, 35.492167], {}, {}))
    //     .add(new ymaps.Placemark([56.649805, 35.288717], {}, {}))
    //     .add(new ymaps.Placemark([56.898716, 35.791791], {}, {}))
    //     .add(new ymaps.Placemark([56.948951, 35.657242], {}, {}))
    //     .add(new ymaps.Placemark([56.858440, 36.574862], {}, {}))
    //     .add(new ymaps.Placemark([56.710510, 36.073404], {}, {}))
    //     .add(new ymaps.Placemark([56.841187, 35.605732], {}, {}))
    //     .add(new ymaps.Placemark([56.959759, 35.883905], {}, {}))
    //     .add(new ymaps.Placemark([56.839617, 35.290981], {}, {}))
    //     .add(new ymaps.Placemark([56.834771, 36.025587], {}, {}))
    //     .add(new ymaps.Placemark([56.817030, 35.201850], {}, {}))
    //     .add(new ymaps.Placemark([56.755141, 36.361790], {}, {}))
    //     .add(new ymaps.Placemark([57.084102, 35.515470], {}, {}))
    //     .add(new ymaps.Placemark([56.551735, 36.005698], {}, {}))
    //     .add(new ymaps.Placemark([56.626594, 35.562550], {}, {}))
    //     .add(new ymaps.Placemark([56.857278, 35.582098], {}, {}))
    //     .add(new ymaps.Placemark([56.961104, 34.911056], {}, {}))
    //     .add(new ymaps.Placemark([56.705055, 35.259890], {}, {}))
    //     .add(new ymaps.Placemark([56.947056, 35.807440], {}, {}))
    //     .add(new ymaps.Placemark([56.774658, 35.800550], {}, {}))
    //     .add(new ymaps.Placemark([56.927620, 35.894604], {}, {}))
    //     .add(new ymaps.Placemark([56.809581, 36.086547], {}, {}))
    //     .add(new ymaps.Placemark([56.949098, 35.717627], {}, {}))
    //     .add(new ymaps.Placemark([56.943001, 35.704826], {}, {}))
    //     .add(new ymaps.Placemark([56.894852, 35.991192], {}, {}))
    //     .add(new ymaps.Placemark([56.981729, 36.067116], {}, {}))
    //     .add(new ymaps.Placemark([57.001201, 35.250799], {}, {}))
    //     .add(new ymaps.Placemark([56.920516, 36.175255], {}, {}))
    //     .add(new ymaps.Placemark([56.670954, 35.254626], {}, {}))
    //     .add(new ymaps.Placemark([56.967424, 35.579744], {}, {}))
    //     .add(new ymaps.Placemark([56.738280, 35.836087], {}, {}))
    //     .add(new ymaps.Placemark([56.927639, 35.762156], {}, {}))
    //     .add(new ymaps.Placemark([56.697168, 36.103291], {}, {}))
    //     .add(new ymaps.Placemark([56.785014, 36.334122], {}, {}))
    //     .add(new ymaps.Placemark([56.495787, 35.998754], {}, {}))
    //     .add(new ymaps.Placemark([56.628466, 35.942681], {}, {}))
    //     .add(new ymaps.Placemark([56.854266, 35.467140], {}, {}))
    //     .add(new ymaps.Placemark([56.943771, 35.935773], {}, {}))
    //     .add(new ymaps.Placemark([56.889120, 35.993562], {}, {}))
    //     .add(new ymaps.Placemark([56.880371, 35.986798], {}, {}))
    //     .add(new ymaps.Placemark([56.946982, 35.635997], {}, {}))
    //     .add(new ymaps.Placemark([56.945956, 35.739959], {}, {}))
    //     .add(new ymaps.Placemark([57.105143, 35.383444], {}, {}))
    //     .add(new ymaps.Placemark([56.717046, 35.747666], {}, {}))
    //     .add(new ymaps.Placemark([56.725877, 36.097919], {}, {}))
    //     .add(new ymaps.Placemark([56.906271, 35.299245], {}, {}))
    //     .add(new ymaps.Placemark([56.579643, 35.992385], {}, {}))
    //     .add(new ymaps.Placemark([56.647643, 35.660018], {}, {}))
    //     .add(new ymaps.Placemark([56.811084, 35.310582], {}, {}))
    //     .add(new ymaps.Placemark([57.010146, 35.633868], {}, {}))
    //     .add(new ymaps.Placemark([56.941935, 35.703271], {}, {}))
    //     .add(new ymaps.Placemark([56.749648, 35.464921], {}, {}))
    //     .add(new ymaps.Placemark([56.569344, 36.020161], {}, {}))
    //     .add(new ymaps.Placemark([56.868713, 35.655292], {}, {}))
    //     .add(new ymaps.Placemark([56.687094, 35.911097], {}, {}))
    //     .add(new ymaps.Placemark([56.733462, 35.686572], {}, {}))
    //     .add(new ymaps.Placemark([56.943654, 35.646633], {}, {}))
    //     .add(new ymaps.Placemark([56.741869, 36.023997], {}, {}))
    //     .add(new ymaps.Placemark([56.840129, 35.697118], {}, {}))
    //     .add(new ymaps.Placemark([56.922054, 35.993346], {}, {}))
    //     .add(new ymaps.Placemark([56.838844, 36.380493], {}, {}))
    //     .add(new ymaps.Placemark([56.775911, 36.122084], {}, {}))
    //     .add(new ymaps.Placemark([56.780941, 36.114403], {}, {}))
    //     .add(new ymaps.Placemark([56.778253, 36.135864], {}, {}))
    //     .add(new ymaps.Placemark([56.854621, 36.026854], {}, {}))
    //     .add(new ymaps.Placemark([56.942092, 35.015728], {}, {}))
    //     .add(new ymaps.Placemark([56.781508, 36.264638], {}, {}))
    //     .add(new ymaps.Placemark([56.828015, 35.090369], {}, {}))
    //     .add(new ymaps.Placemark([56.976544, 35.897101], {}, {}))
    //     .add(new ymaps.Placemark([56.991832, 34.985769], {}, {}))
    //     .add(new ymaps.Placemark([56.690831, 35.325754], {}, {}))
    //     .add(new ymaps.Placemark([56.944238, 35.435807], {}, {}))
    //     .add(new ymaps.Placemark([56.818681, 35.540066], {}, {}))
    //     .add(new ymaps.Placemark([56.991537, 35.940714], {}, {}));
}


ymaps.ready(init);