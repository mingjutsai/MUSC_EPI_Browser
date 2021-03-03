import { format } from 'mathjs'

function scientificFormat(num) {
    return format(num, { notation: 'exponential' })
  }


const TRACKS = [
    "Gene_model",
    "Loop",
    "SNP",
    "ChromHMM",
    "ATAC",
    "H3K27ac",
    "H3K4me3",
    "H3K4me1",
    "DNase",
    "H3K9ac"
]


// yzhang original code
// export let DiseaseSearchFlow = {
//     'Chagas cardiomyopathy in Tripanosoma cruzi seropositivity:Heart': {
//         'NHCFV: Fibroblast Ventricle: Heart': TRACKS,
//         'NHCFA: Fibroblast Arteries: Heart': TRACKS,
//     },
//     'Idiopathic dilated cardiomyopathy:Heart': {
//         'NHCFV: Fibroblast Ventricle: Heart': TRACKS,
//         mock_cell_line_1: ["Gene_model",
//             "Loop",
//             "HiC",
//             "LD",
//             "SNP",],
//         mock_cell_line_1: ["Gene_model",]
//     }
// }

export let DiseaseSearchFlow = {
    'hMSC: human Mesenchymal Stem Cells': [
        "Gene_model",
        "Loop",
        "SNP",
        "ChromHMM",
        "ATAC",
        "H3K27ac",
        "H3K4me3",
        "H3K4me1",
        "DNase",
        "H3K9ac"
    ],
    'OB: Osteoblast': [
        "Gene_model",
        "Loop",
        "SNP",
        "ChromHMM",
        "ATAC",
        "H3K27ac",
        "H3K4me3",
        "H3K4me1",
        "DNase",
    ],
    'OC: Osteocyte': [
        "Gene_model",
        "Loop",
        "SNP",
        "ChromHMM",
        "ATAC",
        "H3K27ac",
        "H3K4me3",
        "H3K4me1",
        "DNase",
    ],
    }


export let SnpSearchFlow = {
        'hMSC: human Mesenchymal Stem Cells': [
            "Gene_model",
            "Loop",
            "SNP",
            "ChromHMM",
            "ATAC",
            "H3K27ac",
            "H3K4me3",
            "H3K4me1",
            "DNase",
            "H3K9ac"
        ],
        'OB: Osteoblast': [
            "Gene_model",
            "Loop",
            "SNP",
            "ChromHMM",
            "ATAC",
            "H3K27ac",
            "H3K4me3",
            "H3K4me1",
            "DNase",
        ],
        'OC: Osteocyte': [
            "Gene_model",
            "Loop",
            "SNP",
            "ChromHMM",
            "ATAC",
            "H3K27ac",
            "H3K4me3",
            "H3K4me1",
            "DNase",
        ],
}

// yzhang origianl code
// export let GeneSearchFlow = {
//     NHCFV_Fibroblast_Ventricle: TRACKS,
//     NHCFA_Fibroblast_Arteries: TRACKS,
//     mock_cell_line_1: ["Gene_model",
//         "Loop",
//         "HiC",
//         "LD",
//         "SNP",],
//     mock_cell_line_2: ["Gene_model",]
// }


export let GeneSearchFlow = {
    'hMSC: human Mesenchymal Stem Cells': [
        "Gene_model",
        "Loop",
        "SNP",
        "ChromHMM",
        "ATAC",
        "H3K27ac",
        "H3K4me3",
        "H3K4me1",
        "DNase",
        "H3K9ac"
    ],
    'OB: Osteoblast': [
        "Gene_model",
        "Loop",
        "SNP",
        "ChromHMM",
        "ATAC",
        "H3K27ac",
        "H3K4me3",
        "H3K4me1",
        "DNase",
    ],
    'OC: Osteocyte': [
        "Gene_model",
        "Loop",
        "SNP",
        "ChromHMM",
        "ATAC",
        "H3K27ac",
        "H3K4me3",
        "H3K4me1",
        "DNase",
    ],
}