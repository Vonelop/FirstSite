function init() {
    let map = new ymaps.Map('map-presence', {
        center: [56.86200763182443,35.9201537850128],
        zoom: 11
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects
        .add(new ymaps.Placemark([56.852784, 36.002636], {}, {}))
        .add(new ymaps.Placemark([56.947558, 35.866167], {}, {}))
        .add(new ymaps.Placemark([56.858729, 36.004567], {}, {}))
        .add(new ymaps.Placemark([56.799249, 36.181878], {}, {}))
        .add(new ymaps.Placemark([56.677294, 36.073862], {}, {}))
        .add(new ymaps.Placemark([56.783153, 35.910202], {}, {}))
        .add(new ymaps.Placemark([56.641966, 35.257042], {}, {}))
        .add(new ymaps.Placemark([56.754161, 35.884822], {}, {}))
        .add(new ymaps.Placemark([57.076875, 35.350410], {}, {}))
        .add(new ymaps.Placemark([56.742141, 35.917412], {}, {}))
        .add(new ymaps.Placemark([56.776019, 36.291641], {}, {}))
        .add(new ymaps.Placemark([56.727052, 35.446425], {}, {}))
        .add(new ymaps.Placemark([56.781261, 35.944397], {}, {}))
        .add(new ymaps.Placemark([56.800646, 35.788504], {}, {}))
        .add(new ymaps.Placemark([57.005975, 35.235779], {}, {}))
        .add(new ymaps.Placemark([56.657010, 35.678658], {}, {}))
        .add(new ymaps.Placemark([56.706621, 35.607098], {}, {}))
        .add(new ymaps.Placemark([57.057382, 36.068877], {}, {}))
        .add(new ymaps.Placemark([56.713020, 35.805742], {}, {}))
        .add(new ymaps.Placemark([56.890270, 36.029063], {}, {}))
        .add(new ymaps.Placemark([56.637635, 35.527426], {}, {}))
        .add(new ymaps.Placemark([56.713380, 36.023997], {}, {}))
        .add(new ymaps.Placemark([56.923572, 36.007728], {}, {}))
        .add(new ymaps.Placemark([56.686565, 35.763315], {}, {}))
        .add(new ymaps.Placemark([56.874503, 36.044065], {}, {}))
        .add(new ymaps.Placemark([56.943473, 36.137988], {}, {}))
        .add(new ymaps.Placemark([56.980738, 35.130946], {}, {}))
        .add(new ymaps.Placemark([56.679015, 35.890750], {}, {}))
        .add(new ymaps.Placemark([56.991454, 35.928075], {}, {}))
        .add(new ymaps.Placemark([56.726465, 35.474515], {}, {}))
        .add(new ymaps.Placemark([56.789146, 35.933105], {}, {}))
        .add(new ymaps.Placemark([56.633100, 35.618497], {}, {}))
        .add(new ymaps.Placemark([56.782701, 35.792869], {}, {}))
        .add(new ymaps.Placemark([56.989306, 35.726232], {}, {}))
        .add(new ymaps.Placemark([56.826769, 35.587533], {}, {}))
        .add(new ymaps.Placemark([56.847936, 35.674175], {}, {}))
        .add(new ymaps.Placemark([56.823439, 36.004620], {}, {}))
        .add(new ymaps.Placemark([56.939063, 35.803811], {}, {}))
        .add(new ymaps.Placemark([56.867124, 36.567936], {}, {}))
        .add(new ymaps.Placemark([57.005171, 34.918422], {}, {}))
        .add(new ymaps.Placemark([56.834737, 35.817178], {}, {}))
        .add(new ymaps.Placemark([56.792404, 35.930752], {}, {}))
        .add(new ymaps.Placemark([56.874666, 36.553760], {}, {}))
        .add(new ymaps.Placemark([56.918345, 35.195831], {}, {}))
        .add(new ymaps.Placemark([56.660611, 35.275027], {}, {}))
        .add(new ymaps.Placemark([56.815272, 35.863549], {}, {}))
        .add(new ymaps.Placemark([56.900941, 35.795756], {}, {}))
        .add(new ymaps.Placemark([56.997975, 35.069465], {}, {}))
        .add(new ymaps.Placemark([56.989586, 35.158219], {}, {}))
        .add(new ymaps.Placemark([56.970947, 35.433274], {}, {}))
        .add(new ymaps.Placemark([56.736138, 35.884381], {}, {}))
        .add(new ymaps.Placemark([56.684375, 35.304545], {}, {}))
        .add(new ymaps.Placemark([56.900206, 35.264507], {}, {}))
        .add(new ymaps.Placemark([56.941238, 35.252380], {}, {}))
        .add(new ymaps.Placemark([57.015606, 35.917151], {}, {}))
        .add(new ymaps.Placemark([56.985981, 35.898727], {}, {}))
        .add(new ymaps.Placemark([56.638832, 35.160285], {}, {}))
        .add(new ymaps.Placemark([56.986889, 35.335726], {}, {}))
        .add(new ymaps.Placemark([56.689066, 35.856578], {}, {}))
        .add(new ymaps.Placemark([56.975284, 35.737821], {}, {}))
        .add(new ymaps.Placemark([56.778411, 35.784946], {}, {}))
        .add(new ymaps.Placemark([56.934127, 35.689348], {}, {}))
        .add(new ymaps.Placemark([56.623024, 35.965975], {}, {}))
        .add(new ymaps.Placemark([57.067498, 35.463089], {}, {}))
        .add(new ymaps.Placemark([56.876382, 35.950084], {}, {}))
        .add(new ymaps.Placemark([56.768719, 35.804521], {}, {}))
        .add(new ymaps.Placemark([56.929707, 35.731074], {}, {}))
        .add(new ymaps.Placemark([56.701215, 36.385057], {}, {}))
        .add(new ymaps.Placemark([56.650414, 36.326541], {}, {}))
        .add(new ymaps.Placemark([57.126543, 35.399371], {}, {}))
        .add(new ymaps.Placemark([56.865274, 35.781542], {}, {}))
        .add(new ymaps.Placemark([56.883027, 35.982153], {}, {}))
        .add(new ymaps.Placemark([56.778426, 35.968239], {}, {}))
        .add(new ymaps.Placemark([56.960780, 35.863333], {}, {}))
        .add(new ymaps.Placemark([57.084259, 35.381675], {}, {}))
        .add(new ymaps.Placemark([57.053999, 35.474435], {}, {}))
        .add(new ymaps.Placemark([56.970731, 35.853838], {}, {}))
        .add(new ymaps.Placemark([57.001573, 35.035194], {}, {}))
        .add(new ymaps.Placemark([56.881566, 35.982207], {}, {}))
        .add(new ymaps.Placemark([56.802913, 36.114745], {}, {}))
        .add(new ymaps.Placemark([56.724529, 35.369062], {}, {}))
        .add(new ymaps.Placemark([56.834565, 35.671929], {}, {}))
        .add(new ymaps.Placemark([56.547810, 36.018571], {}, {}))
        .add(new ymaps.Placemark([56.710648, 35.633239], {}, {}))
        .add(new ymaps.Placemark([56.776128, 35.934192], {}, {}))
        .add(new ymaps.Placemark([57.103422, 35.448949], {}, {}))
        .add(new ymaps.Placemark([56.739396, 36.247246], {}, {}))
        .add(new ymaps.Placemark([57.010465, 36.158672], {}, {}))
        .add(new ymaps.Placemark([56.841537, 36.015382], {}, {}))
        .add(new ymaps.Placemark([57.024161, 35.091842], {}, {}))
        .add(new ymaps.Placemark([56.854542, 36.018895], {}, {}))
        .add(new ymaps.Placemark([56.830408, 36.475616], {}, {}))
        .add(new ymaps.Placemark([57.024837, 35.479528], {}, {}))
        .add(new ymaps.Placemark([57.018766, 35.113051], {}, {}))
        .add(new ymaps.Placemark([56.778036, 36.062373], {}, {}))
        .add(new ymaps.Placemark([56.806979, 35.532843], {}, {}))
        .add(new ymaps.Placemark([56.605796, 35.712165], {}, {}))
        .add(new ymaps.Placemark([56.902796, 35.925811], {}, {}))
        .add(new ymaps.Placemark([56.585622, 35.994254], {}, {}))
        .add(new ymaps.Placemark([56.952898, 35.624884], {}, {}))
        .add(new ymaps.Placemark([56.826665, 35.804601], {}, {}))
        .add(new ymaps.Placemark([57.026385, 35.507708], {}, {}))
        .add(new ymaps.Placemark([56.891298, 35.564634], {}, {}))
        .add(new ymaps.Placemark([56.995200, 35.013644], {}, {}))
        .add(new ymaps.Placemark([56.958861, 35.565147], {}, {}))
        .add(new ymaps.Placemark([56.941503, 36.093715], {}, {}))
        .add(new ymaps.Placemark([56.981837, 34.911487], {}, {}))
        .add(new ymaps.Placemark([57.110994, 35.395563], {}, {}))
        .add(new ymaps.Placemark([57.086289, 35.527732], {}, {}))
        .add(new ymaps.Placemark([56.942293, 35.856659], {}, {}))
        .add(new ymaps.Placemark([56.749125, 36.190455], {}, {}))
        .add(new ymaps.Placemark([56.871827, 35.684299], {}, {}))
        .add(new ymaps.Placemark([56.788998, 36.092682], {}, {}))
        .add(new ymaps.Placemark([56.891504, 36.058367], {}, {}))
        .add(new ymaps.Placemark([56.791197, 35.967601], {}, {}))
        .add(new ymaps.Placemark([56.805816, 36.105034], {}, {}))
        .add(new ymaps.Placemark([56.735703, 35.901961], {}, {}))
        .add(new ymaps.Placemark([56.654422, 35.945709], {}, {}))
        .add(new ymaps.Placemark([56.936200, 35.045049], {}, {}))
        .add(new ymaps.Placemark([56.705925, 35.913567], {}, {}))
        .add(new ymaps.Placemark([56.774983, 36.069946], {}, {}))
        .add(new ymaps.Placemark([57.060446, 35.403602], {}, {}))
        .add(new ymaps.Placemark([56.699575, 35.629565], {}, {}))
        .add(new ymaps.Placemark([56.838622, 35.029822], {}, {}))
        .add(new ymaps.Placemark([56.996416, 35.725604], {}, {}))
        .add(new ymaps.Placemark([57.040922, 36.152339], {}, {}))
        .add(new ymaps.Placemark([56.799852, 35.749867], {}, {}))
        .add(new ymaps.Placemark([57.117773, 35.548644], {}, {}))
        .add(new ymaps.Placemark([56.833215, 35.806165], {}, {}))
        .add(new ymaps.Placemark([56.696323, 35.288780], {}, {}))
        .add(new ymaps.Placemark([56.859040, 35.749077], {}, {}))
        .add(new ymaps.Placemark([56.848448, 35.739779], {}, {}))
        .add(new ymaps.Placemark([56.987972, 35.441466], {}, {}))
        .add(new ymaps.Placemark([56.927482, 35.913899], {}, {}))
        .add(new ymaps.Placemark([56.834880, 36.015211], {}, {}))
        .add(new ymaps.Placemark([56.874715, 35.523941], {}, {}))
        .add(new ymaps.Placemark([56.930129, 35.265469], {}, {}))
        .add(new ymaps.Placemark([57.137241, 35.690992], {}, {}))
        .add(new ymaps.Placemark([56.890939, 35.985648], {}, {}))
        .add(new ymaps.Placemark([56.930959, 35.917322], {}, {}))
        .add(new ymaps.Placemark([56.967326, 35.800658], {}, {}))
        .add(new ymaps.Placemark([56.984137, 35.238286], {}, {}))
        .add(new ymaps.Placemark([56.730864, 35.535125], {}, {}))
        .add(new ymaps.Placemark([56.922540, 35.868508], {}, {}))
        .add(new ymaps.Placemark([56.850132, 35.648780], {}, {}))
        .add(new ymaps.Placemark([56.994543, 35.181126], {}, {}))
        .add(new ymaps.Placemark([56.805348, 35.109404], {}, {}))
        .add(new ymaps.Placemark([57.002618, 35.720834], {}, {}))
        .add(new ymaps.Placemark([56.645331, 35.925658], {}, {}))
        .add(new ymaps.Placemark([56.818395, 35.114974], {}, {}))
        .add(new ymaps.Placemark([56.884551, 36.015310], {}, {}))
        .add(new ymaps.Placemark([56.982970, 35.297691], {}, {}))
        .add(new ymaps.Placemark([56.666028, 35.972209], {}, {}))
        .add(new ymaps.Placemark([57.034555, 35.735943], {}, {}))
        .add(new ymaps.Placemark([56.713054, 35.311732], {}, {}))
        .add(new ymaps.Placemark([56.943398, 35.918714], {}, {}))
        .add(new ymaps.Placemark([56.793366, 36.238685], {}, {}))
        .add(new ymaps.Placemark([56.690673, 35.398940], {}, {}))
        .add(new ymaps.Placemark([56.890486, 35.753460], {}, {}))
        .add(new ymaps.Placemark([56.852465, 35.754628], {}, {}))
        .add(new ymaps.Placemark([56.900771, 35.975003], {}, {}))
        .add(new ymaps.Placemark([56.916178, 35.965445], {}, {}))
        .add(new ymaps.Placemark([56.664589, 35.661796], {}, {}))
        .add(new ymaps.Placemark([56.639525, 35.730374], {}, {}))
        .add(new ymaps.Placemark([57.080668, 35.751655], {}, {}))
        .add(new ymaps.Placemark([56.854955, 36.002357], {}, {}))
        .add(new ymaps.Placemark([56.856555, 36.018913], {}, {}))
        .add(new ymaps.Placemark([56.731383, 35.868382], {}, {}))
        .add(new ymaps.Placemark([56.719777, 35.979575], {}, {}))
        .add(new ymaps.Placemark([56.878242, 35.016905], {}, {}))
        .add(new ymaps.Placemark([56.872575, 35.641324], {}, {}))
        .add(new ymaps.Placemark([56.931387, 35.314723], {}, {}))
        .add(new ymaps.Placemark([56.935370, 35.948817], {}, {}))
        .add(new ymaps.Placemark([56.935350, 35.972892], {}, {}))
        .add(new ymaps.Placemark([56.534232, 35.990436], {}, {}))
        .add(new ymaps.Placemark([56.908989, 35.939771], {}, {}))
        .add(new ymaps.Placemark([56.732775, 35.373635], {}, {}))
        .add(new ymaps.Placemark([56.739347, 35.971985], {}, {}))
        .add(new ymaps.Placemark([56.779881, 36.316381], {}, {}))
        .add(new ymaps.Placemark([56.658924, 35.234036], {}, {}))
        .add(new ymaps.Placemark([56.818252, 36.005132], {}, {}))
        .add(new ymaps.Placemark([56.735037, 35.483804], {}, {}))
        .add(new ymaps.Placemark([56.950237, 35.875856], {}, {}))
        .add(new ymaps.Placemark([56.666661, 35.955725], {}, {}))
        .add(new ymaps.Placemark([56.836175, 36.262688], {}, {}))
        .add(new ymaps.Placemark([57.091947, 35.372862], {}, {}))
        .add(new ymaps.Placemark([56.781005, 36.203157], {}, {}))
        .add(new ymaps.Placemark([56.886686, 35.992816], {}, {}))
        .add(new ymaps.Placemark([56.834309, 36.212203], {}, {}))
        .add(new ymaps.Placemark([56.923935, 35.635386], {}, {}))
        .add(new ymaps.Placemark([56.725798, 35.338016], {}, {}))
        .add(new ymaps.Placemark([56.797186, 35.722756], {}, {}))
        .add(new ymaps.Placemark([56.539051, 35.961313], {}, {}))
        .add(new ymaps.Placemark([56.716967, 35.833177], {}, {}))
        .add(new ymaps.Placemark([56.759148, 35.805015], {}, {}))
        .add(new ymaps.Placemark([56.856122, 36.468133], {}, {}))
        .add(new ymaps.Placemark([56.972860, 35.548510], {}, {}))
        .add(new ymaps.Placemark([56.693486, 35.832656], {}, {}))
        .add(new ymaps.Placemark([57.004402, 35.727822], {}, {}))
        .add(new ymaps.Placemark([56.638486, 35.333004], {}, {}))
        .add(new ymaps.Placemark([56.961629, 35.791109], {}, {}))
        .add(new ymaps.Placemark([56.825779, 35.243954], {}, {}))
        .add(new ymaps.Placemark([56.938400, 35.688144], {}, {}))
        .add(new ymaps.Placemark([57.119727, 35.692303], {}, {}))
        .add(new ymaps.Placemark([56.931475, 35.656909], {}, {}))
        .add(new ymaps.Placemark([56.688928, 36.017331], {}, {}))
        .add(new ymaps.Placemark([56.759187, 36.114332], {}, {}))
        .add(new ymaps.Placemark([56.956814, 36.159490], {}, {}))
        .add(new ymaps.Placemark([56.776862, 35.954036], {}, {}))
        .add(new ymaps.Placemark([56.917082, 36.049886], {}, {}))
        .add(new ymaps.Placemark([56.913259, 36.046922], {}, {}))
        .add(new ymaps.Placemark([56.679806, 35.510053], {}, {}))
        .add(new ymaps.Placemark([56.792256, 35.991586], {}, {}))
        .add(new ymaps.Placemark([57.082630, 35.424677], {}, {}))
        .add(new ymaps.Placemark([56.747842, 36.320288], {}, {}))
        .add(new ymaps.Placemark([56.999470, 34.898462], {}, {}))
        .add(new ymaps.Placemark([56.909235, 35.040414], {}, {}))
        .add(new ymaps.Placemark([56.720133, 35.813683], {}, {}))
        .add(new ymaps.Placemark([56.729087, 35.380839], {}, {}))
        .add(new ymaps.Placemark([56.720113, 36.267988], {}, {}))
        .add(new ymaps.Placemark([56.766775, 35.912696], {}, {}))
        .add(new ymaps.Placemark([56.720202, 35.601079], {}, {}))
        .add(new ymaps.Placemark([56.517321, 35.971203], {}, {}))
        .add(new ymaps.Placemark([56.719293, 35.961932], {}, {}))
        .add(new ymaps.Placemark([56.836938, 35.667734], {}, {}))
        .add(new ymaps.Placemark([56.832014, 35.671570], {}, {}))
        .add(new ymaps.Placemark([56.946369, 35.685224], {}, {}))
        .add(new ymaps.Placemark([56.964127, 34.858918], {}, {}))
        .add(new ymaps.Placemark([56.846450, 35.035644], {}, {}))
        .add(new ymaps.Placemark([56.811724, 35.850371], {}, {}))
        .add(new ymaps.Placemark([56.935252, 35.792609], {}, {}))
        .add(new ymaps.Placemark([56.932978, 35.334324], {}, {}))
        .add(new ymaps.Placemark([56.815912, 36.167179], {}, {}))
        .add(new ymaps.Placemark([56.967807, 35.616970], {}, {}))
        .add(new ymaps.Placemark([56.929809, 35.479156], {}, {}))
        .add(new ymaps.Placemark([57.059179, 35.530713], {}, {}))
        .add(new ymaps.Placemark([56.974018, 35.877706], {}, {}))
        .add(new ymaps.Placemark([56.709991, 36.106166], {}, {}))
        .add(new ymaps.Placemark([56.730218, 36.134795], {}, {}))
        .add(new ymaps.Placemark([56.977569, 35.683007], {}, {}))
        .add(new ymaps.Placemark([56.725946, 35.426761], {}, {}))
        .add(new ymaps.Placemark([56.853597, 35.398922], {}, {}))
        .add(new ymaps.Placemark([56.610329, 35.581559], {}, {}))
        .add(new ymaps.Placemark([56.844707, 36.323630], {}, {}))
        .add(new ymaps.Placemark([56.700178, 35.952967], {}, {}))
        .add(new ymaps.Placemark([56.747946, 35.602851], {}, {}))
        .add(new ymaps.Placemark([56.920963, 35.113545], {}, {}))
        .add(new ymaps.Placemark([56.779530, 35.834354], {}, {}))
        .add(new ymaps.Placemark([56.966570, 35.745456], {}, {}))
        .add(new ymaps.Placemark([56.638828, 35.251176], {}, {}))
        .add(new ymaps.Placemark([56.727497, 35.389301], {}, {}))
        .add(new ymaps.Placemark([56.779915, 35.863540], {}, {}))
        .add(new ymaps.Placemark([56.761970, 36.372705], {}, {}))
        .add(new ymaps.Placemark([56.578423, 35.925631], {}, {}))
        .add(new ymaps.Placemark([56.929776, 35.924455], {}, {}))
        .add(new ymaps.Placemark([56.859635, 35.127038], {}, {}))
        .add(new ymaps.Placemark([56.774105, 36.352960], {}, {}))
        .add(new ymaps.Placemark([56.912699, 35.879844], {}, {}))
        .add(new ymaps.Placemark([56.852593, 36.426963], {}, {}))
        .add(new ymaps.Placemark([56.838031, 35.611167], {}, {}))
        .add(new ymaps.Placemark([56.620062, 35.201221], {}, {}))
        .add(new ymaps.Placemark([56.862632, 36.039709], {}, {}))
        .add(new ymaps.Placemark([56.708232, 36.232541], {}, {}))
        .add(new ymaps.Placemark([56.652200, 36.013100], {}, {}))
        .add(new ymaps.Placemark([56.763179, 35.813486], {}, {}))
        .add(new ymaps.Placemark([56.697375, 35.711958], {}, {}))
        .add(new ymaps.Placemark([56.851077, 36.036322], {}, {}))
        .add(new ymaps.Placemark([56.843383, 36.035001], {}, {}))
        .add(new ymaps.Placemark([56.915883, 35.248311], {}, {}))
        .add(new ymaps.Placemark([57.033874, 35.745331], {}, {}))
        .add(new ymaps.Placemark([56.915578, 35.108847], {}, {}))
        .add(new ymaps.Placemark([56.960363, 35.748160], {}, {}))
        .add(new ymaps.Placemark([56.709003, 36.250390], {}, {}))
        .add(new ymaps.Placemark([56.712802, 36.196114], {}, {}))
        .add(new ymaps.Placemark([56.864753, 35.772666], {}, {}))
        .add(new ymaps.Placemark([56.864703, 35.763288], {}, {}))
        .add(new ymaps.Placemark([56.861092, 35.760593], {}, {}))
        .add(new ymaps.Placemark([56.942465, 35.787875], {}, {}))
        .add(new ymaps.Placemark([57.022465, 36.115670], {}, {}))
        .add(new ymaps.Placemark([56.978345, 35.914367], {}, {}))
        .add(new ymaps.Placemark([56.900879, 35.984741], {}, {}))
        .add(new ymaps.Placemark([56.869496, 35.962058], {}, {}))
        .add(new ymaps.Placemark([57.001485, 35.158937], {}, {}))
        .add(new ymaps.Placemark([56.988492, 35.212225], {}, {}))
        .add(new ymaps.Placemark([56.729032, 36.166200], {}, {}))
        .add(new ymaps.Placemark([56.777247, 35.945421], {}, {}))
        .add(new ymaps.Placemark([56.970888, 35.887902], {}, {}))
        .add(new ymaps.Placemark([57.003990, 35.471470], {}, {}))
        .add(new ymaps.Placemark([56.868516, 36.022155], {}, {}))
        .add(new ymaps.Placemark([57.011396, 35.157464], {}, {}))
        .add(new ymaps.Placemark([56.767155, 35.882162], {}, {}))
        .add(new ymaps.Placemark([56.733872, 35.509119], {}, {}))
        .add(new ymaps.Placemark([56.833954, 35.651744], {}, {}))
        .add(new ymaps.Placemark([56.830379, 35.044052], {}, {}))
        .add(new ymaps.Placemark([56.940256, 35.485700], {}, {}))
        .add(new ymaps.Placemark([57.096172, 35.574579], {}, {}))
        .add(new ymaps.Placemark([57.069602, 35.746238], {}, {}))
        .add(new ymaps.Placemark([56.929481, 35.384962], {}, {}))
        .add(new ymaps.Placemark([56.827084, 35.602202], {}, {}))
        .add(new ymaps.Placemark([56.753819, 36.142646], {}, {}))
        .add(new ymaps.Placemark([56.769237, 35.795079], {}, {}))
        .add(new ymaps.Placemark([57.004995, 36.074581], {}, {}))
        .add(new ymaps.Placemark([56.770189, 35.874832], {}, {}))
        .add(new ymaps.Placemark([56.999681, 36.072138], {}, {}))
        .add(new ymaps.Placemark([56.783150, 35.910207], {}, {}))
        .add(new ymaps.Placemark([56.745784, 35.638584], {}, {}))
        .add(new ymaps.Placemark([56.709156, 35.326105], {}, {}))
        .add(new ymaps.Placemark([56.933435, 36.152214], {}, {}))
        .add(new ymaps.Placemark([56.845889, 36.034031], {}, {}))
        .add(new ymaps.Placemark([56.968651, 35.866352], {}, {}))
        .add(new ymaps.Placemark([56.875035, 35.795340], {}, {}))
        .add(new ymaps.Placemark([56.826695, 35.821849], {}, {}))
        .add(new ymaps.Placemark([56.807462, 35.836905], {}, {}))
        .add(new ymaps.Placemark([56.830477, 36.401209], {}, {}))
        .add(new ymaps.Placemark([56.941292, 36.122973], {}, {}))
        .add(new ymaps.Placemark([56.837435, 34.985338], {}, {}))
        .add(new ymaps.Placemark([56.943899, 35.894433], {}, {}))
        .add(new ymaps.Placemark([56.873436, 35.553424], {}, {}))
        .add(new ymaps.Placemark([56.662605, 35.307357], {}, {}))
        .add(new ymaps.Placemark([57.009186, 34.923669], {}, {}))
        .add(new ymaps.Placemark([56.902005, 35.800793], {}, {}))
        .add(new ymaps.Placemark([56.726860, 35.983636], {}, {}))
        .add(new ymaps.Placemark([56.835274, 35.716432], {}, {}))
        .add(new ymaps.Placemark([56.777346, 36.213308], {}, {}))
        .add(new ymaps.Placemark([56.963346, 35.604502], {}, {}))
        .add(new ymaps.Placemark([57.088895, 35.744558], {}, {}))
        .add(new ymaps.Placemark([56.944375, 35.664401], {}, {}))
        .add(new ymaps.Placemark([57.086778, 35.445680], {}, {}))
        .add(new ymaps.Placemark([56.990699, 35.903048], {}, {}))
        .add(new ymaps.Placemark([56.799246, 36.181876], {}, {}))
        .add(new ymaps.Placemark([56.829428, 36.083097], {}, {}))
        .add(new ymaps.Placemark([56.910851, 36.227043], {}, {}))
        .add(new ymaps.Placemark([56.861367, 36.024159], {}, {}))
        .add(new ymaps.Placemark([56.900491, 36.031579], {}, {}))
        .add(new ymaps.Placemark([56.726015, 36.016837], {}, {}))
        .add(new ymaps.Placemark([56.928862, 35.320652], {}, {}))
        .add(new ymaps.Placemark([57.034065, 35.404061], {}, {}))
        .add(new ymaps.Placemark([56.852145, 35.671525], {}, {}))
        .add(new ymaps.Placemark([56.759148, 36.333458], {}, {}))
        .add(new ymaps.Placemark([56.749244, 36.160433], {}, {}))
        .add(new ymaps.Placemark([56.940010, 35.819612], {}, {}))
        .add(new ymaps.Placemark([56.980351, 35.747657], {}, {}))
        .add(new ymaps.Placemark([56.821607, 35.841369], {}, {}))
        .add(new ymaps.Placemark([56.999480, 35.095876], {}, {}))
        .add(new ymaps.Placemark([56.958154, 36.120153], {}, {}))
        .add(new ymaps.Placemark([56.961742, 36.147893], {}, {}))
        .add(new ymaps.Placemark([56.791852, 36.068185], {}, {}))
        .add(new ymaps.Placemark([56.750779, 35.581684], {}, {}))
        .add(new ymaps.Placemark([56.941591, 35.738566], {}, {}))
        .add(new ymaps.Placemark([57.127682, 35.676124], {}, {}))
        .add(new ymaps.Placemark([56.967929, 35.751313], {}, {}))
        .add(new ymaps.Placemark([56.905288, 35.800011], {}, {}))
        .add(new ymaps.Placemark([56.870450, 36.014250], {}, {}))
        .add(new ymaps.Placemark([56.663693, 35.703775], {}, {}))
        .add(new ymaps.Placemark([56.909814, 35.143998], {}, {}))
        .add(new ymaps.Placemark([56.718004, 35.858411], {}, {}))
        .add(new ymaps.Placemark([57.056696, 35.448366], {}, {}))
        .add(new ymaps.Placemark([56.894543, 35.085832], {}, {}))
        .add(new ymaps.Placemark([56.872624, 36.024015], {}, {}))
        .add(new ymaps.Placemark([56.651700, 35.516251], {}, {}))
        .add(new ymaps.Placemark([56.499692, 35.971320], {}, {}))
        .add(new ymaps.Placemark([56.638070, 35.902491], {}, {}))
        .add(new ymaps.Placemark([56.914920, 35.586607], {}, {}))
        .add(new ymaps.Placemark([56.798472, 36.102761], {}, {}))
        .add(new ymaps.Placemark([56.631763, 35.904566], {}, {}))
        .add(new ymaps.Placemark([56.885535, 35.983249], {}, {}))
        .add(new ymaps.Placemark([57.013337, 36.082675], {}, {}))
        .add(new ymaps.Placemark([57.094881, 35.595743], {}, {}))
        .add(new ymaps.Placemark([56.729378, 36.010998], {}, {}))
        .add(new ymaps.Placemark([56.935851, 36.083960], {}, {}))
        .add(new ymaps.Placemark([56.934491, 35.418200], {}, {}))
        .add(new ymaps.Placemark([56.930935, 35.429896], {}, {}))
        .add(new ymaps.Placemark([56.732380, 35.653343], {}, {}))
        .add(new ymaps.Placemark([56.769262, 36.098234], {}, {}))
        .add(new ymaps.Placemark([56.675208, 35.263861], {}, {}))
        .add(new ymaps.Placemark([56.949933, 35.765165], {}, {}))
        .add(new ymaps.Placemark([56.828369, 35.627552], {}, {}))
        .add(new ymaps.Placemark([57.033825, 35.456298], {}, {}))
        .add(new ymaps.Placemark([56.928818, 35.964448], {}, {}))
        .add(new ymaps.Placemark([56.755368, 35.552381], {}, {}))
        .add(new ymaps.Placemark([56.760821, 35.568425], {}, {}))
        .add(new ymaps.Placemark([56.591589, 35.760907], {}, {}))
        .add(new ymaps.Placemark([57.061517, 35.354195], {}, {}))
        .add(new ymaps.Placemark([56.540843, 35.986708], {}, {}))
        .add(new ymaps.Placemark([56.818021, 35.238411], {}, {}))
        .add(new ymaps.Placemark([56.967581, 35.976099], {}, {}))
        .add(new ymaps.Placemark([56.953850, 35.794334], {}, {}))
        .add(new ymaps.Placemark([56.956927, 35.252470], {}, {}))
        .add(new ymaps.Placemark([56.633258, 35.171684], {}, {}))
        .add(new ymaps.Placemark([56.773139, 35.854197], {}, {}))
        .add(new ymaps.Placemark([56.886892, 35.998090], {}, {}))
        .add(new ymaps.Placemark([56.886882, 36.002330], {}, {}))
        .add(new ymaps.Placemark([56.924250, 36.062562], {}, {}))
        .add(new ymaps.Placemark([56.757682, 35.841450], {}, {}))
        .add(new ymaps.Placemark([56.857071, 36.554048], {}, {}))
        .add(new ymaps.Placemark([56.837849, 35.324928], {}, {}))
        .add(new ymaps.Placemark([56.958395, 35.523968], {}, {}))
        .add(new ymaps.Placemark([56.959764, 36.167494], {}, {}))
        .add(new ymaps.Placemark([56.937378, 35.957414], {}, {}))
        .add(new ymaps.Placemark([56.708840, 35.498797], {}, {}))
        .add(new ymaps.Placemark([57.021324, 35.477669], {}, {}))
        .add(new ymaps.Placemark([56.946432, 35.826637], {}, {}))
        .add(new ymaps.Placemark([56.702466, 35.264894], {}, {}))
        .add(new ymaps.Placemark([56.863518, 36.005779], {}, {}))
        .add(new ymaps.Placemark([56.700978, 35.757790], {}, {}))
        .add(new ymaps.Placemark([56.837140, 36.104917], {}, {}))
        .add(new ymaps.Placemark([56.721491, 35.757278], {}, {}))
        .add(new ymaps.Placemark([56.875758, 35.602885], {}, {}))
        .add(new ymaps.Placemark([56.951194, 35.177398], {}, {}))
        .add(new ymaps.Placemark([56.965942, 35.163671], {}, {}))
        .add(new ymaps.Placemark([56.980694, 36.055869], {}, {}))
        .add(new ymaps.Placemark([56.739910, 36.034328], {}, {}))
        .add(new ymaps.Placemark([56.791719, 35.943086], {}, {}))
        .add(new ymaps.Placemark([56.907136, 35.811824], {}, {}))
        .add(new ymaps.Placemark([56.551283, 36.032756], {}, {}))
        .add(new ymaps.Placemark([56.887099, 36.066927], {}, {}))
        .add(new ymaps.Placemark([56.990807, 35.062404], {}, {}))
        .add(new ymaps.Placemark([56.897492, 36.049446], {}, {}))
        .add(new ymaps.Placemark([56.929697, 35.885351], {}, {}))
        .add(new ymaps.Placemark([56.967503, 35.277120], {}, {}))
        .add(new ymaps.Placemark([56.885746, 35.134880], {}, {}))
        .add(new ymaps.Placemark([56.705035, 35.828335], {}, {}))
        .add(new ymaps.Placemark([56.950276, 35.301734], {}, {}))
        .add(new ymaps.Placemark([56.827202, 35.019824], {}, {}))
        .add(new ymaps.Placemark([56.884355, 35.460708], {}, {}))
        .add(new ymaps.Placemark([57.010288, 34.974998], {}, {}))
        .add(new ymaps.Placemark([56.721679, 36.186493], {}, {}))
        .add(new ymaps.Placemark([56.768630, 36.377583], {}, {}))
        .add(new ymaps.Placemark([56.716147, 35.418613], {}, {}))
        .add(new ymaps.Placemark([56.900805, 35.981031], {}, {}))
        .add(new ymaps.Placemark([56.868556, 35.964160], {}, {}))
        .add(new ymaps.Placemark([56.785206, 35.952725], {}, {}))
        .add(new ymaps.Placemark([56.743385, 36.045053], {}, {}))
        .add(new ymaps.Placemark([56.807077, 36.074437], {}, {}))
        .add(new ymaps.Placemark([56.725215, 35.937390], {}, {}))
        .add(new ymaps.Placemark([56.719960, 35.355174], {}, {}))
        .add(new ymaps.Placemark([56.992763, 36.055725], {}, {}))
        .add(new ymaps.Placemark([56.785566, 35.788072], {}, {}))
        .add(new ymaps.Placemark([56.600391, 35.701619], {}, {}))
        .add(new ymaps.Placemark([56.942372, 35.690686], {}, {}))
        .add(new ymaps.Placemark([56.946133, 35.881749], {}, {}))
        .add(new ymaps.Placemark([56.884389, 35.990652], {}, {}))
        .add(new ymaps.Placemark([56.878950, 35.989214], {}, {}))
        .add(new ymaps.Placemark([56.779866, 35.795825], {}, {}))
        .add(new ymaps.Placemark([56.901032, 35.989142], {}, {}))
        .add(new ymaps.Placemark([57.135268, 35.615102], {}, {}))
        .add(new ymaps.Placemark([56.858730, 36.020197], {}, {}))
        .add(new ymaps.Placemark([56.758378, 35.834488], {}, {}))
        .add(new ymaps.Placemark([56.611384, 35.971562], {}, {}))
        .add(new ymaps.Placemark([56.934800, 35.957800], {}, {}))
        .add(new ymaps.Placemark([56.894081, 35.604762], {}, {}))
        .add(new ymaps.Placemark([56.823045, 35.612380], {}, {}))
        .add(new ymaps.Placemark([56.864039, 36.014592], {}, {}))
        .add(new ymaps.Placemark([56.853843, 35.984974], {}, {}))
        .add(new ymaps.Placemark([56.716147, 35.890903], {}, {}))
        .add(new ymaps.Placemark([57.108413, 35.492167], {}, {}))
        .add(new ymaps.Placemark([56.649805, 35.288717], {}, {}))
        .add(new ymaps.Placemark([56.898716, 35.791791], {}, {}))
        .add(new ymaps.Placemark([56.948951, 35.657242], {}, {}))
        .add(new ymaps.Placemark([56.858440, 36.574862], {}, {}))
        .add(new ymaps.Placemark([56.710510, 36.073404], {}, {}))
        .add(new ymaps.Placemark([56.841187, 35.605732], {}, {}))
        .add(new ymaps.Placemark([56.959759, 35.883905], {}, {}))
        .add(new ymaps.Placemark([56.839617, 35.290981], {}, {}))
        .add(new ymaps.Placemark([56.834771, 36.025587], {}, {}))
        .add(new ymaps.Placemark([56.817030, 35.201850], {}, {}))
        .add(new ymaps.Placemark([56.755141, 36.361790], {}, {}))
        .add(new ymaps.Placemark([57.084102, 35.515470], {}, {}))
        .add(new ymaps.Placemark([56.551735, 36.005698], {}, {}))
        .add(new ymaps.Placemark([56.626594, 35.562550], {}, {}))
        .add(new ymaps.Placemark([56.857278, 35.582098], {}, {}))
        .add(new ymaps.Placemark([56.961104, 34.911056], {}, {}))
        .add(new ymaps.Placemark([56.705055, 35.259890], {}, {}))
        .add(new ymaps.Placemark([56.947056, 35.807440], {}, {}))
        .add(new ymaps.Placemark([56.774658, 35.800550], {}, {}))
        .add(new ymaps.Placemark([56.927620, 35.894604], {}, {}))
        .add(new ymaps.Placemark([56.809581, 36.086547], {}, {}))
        .add(new ymaps.Placemark([56.949098, 35.717627], {}, {}))
        .add(new ymaps.Placemark([56.943001, 35.704826], {}, {}))
        .add(new ymaps.Placemark([56.894852, 35.991192], {}, {}))
        .add(new ymaps.Placemark([56.981729, 36.067116], {}, {}))
        .add(new ymaps.Placemark([57.001201, 35.250799], {}, {}))
        .add(new ymaps.Placemark([56.920516, 36.175255], {}, {}))
        .add(new ymaps.Placemark([56.670954, 35.254626], {}, {}))
        .add(new ymaps.Placemark([56.967424, 35.579744], {}, {}))
        .add(new ymaps.Placemark([56.738280, 35.836087], {}, {}))
        .add(new ymaps.Placemark([56.927639, 35.762156], {}, {}))
        .add(new ymaps.Placemark([56.697168, 36.103291], {}, {}))
        .add(new ymaps.Placemark([56.785014, 36.334122], {}, {}))
        .add(new ymaps.Placemark([56.495787, 35.998754], {}, {}))
        .add(new ymaps.Placemark([56.628466, 35.942681], {}, {}))
        .add(new ymaps.Placemark([56.854266, 35.467140], {}, {}))
        .add(new ymaps.Placemark([56.943771, 35.935773], {}, {}))
        .add(new ymaps.Placemark([56.889120, 35.993562], {}, {}))
        .add(new ymaps.Placemark([56.880371, 35.986798], {}, {}))
        .add(new ymaps.Placemark([56.946982, 35.635997], {}, {}))
        .add(new ymaps.Placemark([56.945956, 35.739959], {}, {}))
        .add(new ymaps.Placemark([57.105143, 35.383444], {}, {}))
        .add(new ymaps.Placemark([56.717046, 35.747666], {}, {}))
        .add(new ymaps.Placemark([56.725877, 36.097919], {}, {}))
        .add(new ymaps.Placemark([56.906271, 35.299245], {}, {}))
        .add(new ymaps.Placemark([56.579643, 35.992385], {}, {}))
        .add(new ymaps.Placemark([56.647643, 35.660018], {}, {}))
        .add(new ymaps.Placemark([56.811084, 35.310582], {}, {}))
        .add(new ymaps.Placemark([57.010146, 35.633868], {}, {}))
        .add(new ymaps.Placemark([56.941935, 35.703271], {}, {}))
        .add(new ymaps.Placemark([56.749648, 35.464921], {}, {}))
        .add(new ymaps.Placemark([56.569344, 36.020161], {}, {}))
        .add(new ymaps.Placemark([56.868713, 35.655292], {}, {}))
        .add(new ymaps.Placemark([56.687094, 35.911097], {}, {}))
        .add(new ymaps.Placemark([56.733462, 35.686572], {}, {}))
        .add(new ymaps.Placemark([56.943654, 35.646633], {}, {}))
        .add(new ymaps.Placemark([56.741869, 36.023997], {}, {}))
        .add(new ymaps.Placemark([56.840129, 35.697118], {}, {}))
        .add(new ymaps.Placemark([56.922054, 35.993346], {}, {}))
        .add(new ymaps.Placemark([56.838844, 36.380493], {}, {}))
        .add(new ymaps.Placemark([56.775911, 36.122084], {}, {}))
        .add(new ymaps.Placemark([56.780941, 36.114403], {}, {}))
        .add(new ymaps.Placemark([56.778253, 36.135864], {}, {}))
        .add(new ymaps.Placemark([56.854621, 36.026854], {}, {}))
        .add(new ymaps.Placemark([56.942092, 35.015728], {}, {}))
        .add(new ymaps.Placemark([56.781508, 36.264638], {}, {}))
        .add(new ymaps.Placemark([56.828015, 35.090369], {}, {}))
        .add(new ymaps.Placemark([56.976544, 35.897101], {}, {}))
        .add(new ymaps.Placemark([56.991832, 34.985769], {}, {}))
        .add(new ymaps.Placemark([56.690831, 35.325754], {}, {}))
        .add(new ymaps.Placemark([56.944238, 35.435807], {}, {}))
        .add(new ymaps.Placemark([56.818681, 35.540066], {}, {}))
        .add(new ymaps.Placemark([56.991537, 35.940714], {}, {}));
}


ymaps.ready(init);