export let OC_ViewConfig = {
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
    "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
    "//higlass.io/api/v1",
    "https://resgen.io/api/v1/gt/paper-data"
  ],
  "exportViewUrl": "/api/v1/viewconfs",
  "views": [
    {
      "editable": true,
      "initialXDomain": [
        -88077,
        111923
      ],
      "autocompleteSource": "/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
      "genomePositionSearchBox": {
        "autocompleteServer": "//higlass.io/api/v1",
        "autocompleteId": "P0PLbQMwTYGy-5uPIQid7A",
        "chromInfoServer": "//higlass.io/api/v1",
        "chromInfoId": "hg38",
        "visible": true
      },
      "tracks": {
        "center": [],
        "left": [],
        "right": [],
        "top": [
          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "MUSC_OC_HiC_loop",
            "uid": "Zr00fNSwR-CSWnXUxXZ7Sw",
            "type": "1d-arcs",
            "options": {
              "showTooltip": true,
              "alternating": false,
              "annotationStyle": "box",
              "fillColor": "blue",
              "fillOpacity": 0.3,
              "fontSize": "10",
              "axisPositionHorizontal": "right",
              "labelColor": "black",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "minHeight": 20,
              "maxAnnotationHeight": null,
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "valueColumn": null,
              "colorEncoding": "itemRgb",
              "showTexts": false,
              "colorRange": [
                "#000000",
                "#652537",
                "#bf5458",
                "#fba273",
                "#ffffe0"
              ],
              "colorEncodingRange": false,
              "annotationHeight": 16,
              "name": "HiC_OC_loop.bed.beddb",
              "arcStyle": "ellipse",
              "flip1D": "no",
              "strokeColor": "purple",
              "strokeWidth": 3
            },
            "width": 1250,
            "height": 80
          },
          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "OB_chromhmm",
            // "uid": "Yl4Q6L9xSmCXeguWsVs-Tw",
            "type": "bedlike",
            "options": {
                "showTooltip": true,
                "alternating": false,
                "annotationStyle": "box",
                "fillColor": "blue",
                "fillOpacity": 0.3,
                "fontSize": "10",
                "axisPositionHorizontal": "right",
                "labelColor": "black",
                "labelPosition": "topLeft",
                "labelLeftMargin": 0,
                "labelRightMargin": 0,
                "labelTopMargin": 0,
                "labelBottomMargin": 0,
                "minHeight": 20,
                "maxAnnotationHeight": null,
                "trackBorderWidth": 0,
                "trackBorderColor": "black",
                "valueColumn": null,
                "colorEncoding": "itemRgb",
                "showTexts": false,
                "colorRange": [
                    "#000000",
                    "#652537",
                    "#bf5458",
                    "#fba273",
                    "#ffffe0"
                ],
                "colorEncodingRange": false,
                "annotationHeight": 16,
                "name": "E129_25_imputed12marks_dense.beddb"
            },
            "width": 1306,
            "height": 61
        },
          {
            "server": "//higlass.io/api/v1",
            "tilesetUid": "NyITQvZsS_mOFNlz5C2LJg",
            "uid": "WR2yThKfRNatI9lz0OL4lg",
            "type": "horizontal-chromosome-labels",
            "options": {
              "showTooltip": true,
              "color": "#808080",
              "stroke": "#ffffff",
              "fontSize": 12,
              "fontIsLeftAligned": false,
              "showMousePosition": false,
              "mousePositionColor": "#000000"
            },
            "width": 1250,
            "height": 30
          },
          {
            "server": "//higlass.io/api/v1",
            "tilesetUid": "P0PLbQMwTYGy-5uPIQid7A",
            "uid": "GAxNnq7bQ3W9OejRcamM9Q",
            "type": "horizontal-gene-annotations",
            "options": {
              "showTooltip": true,
              "fontSize": 10,
              "labelColor": "black",
              "labelBackgroundColor": "#ffffff",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "minHeight": 24,
              "plusStrandColor": "blue",
              "minusStrandColor": "red",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "showMousePosition": false,
              "mousePositionColor": "#000000",
              "geneAnnotationHeight": 16,
              "geneLabelPosition": "outside",
              "geneStrandSpacing": 4,
              "name": "Gene Annotations (hg38)"
            },
            "width": 1250,
            "height": 59
          },
          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "ATAC_seq_osteoblast_pvalue",
            "uid": "Q3Izx58GQ0-5xNDJEeClog",
            "type": "horizontal-bar",
            "options": {
              "showTooltip": true,
              "align": "bottom",
              "labelColor": "[glyph-color]",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "labelShowResolution": false,
              "labelShowAssembly": true,
              "axisLabelFormatting": "scientific",
              "axisPositionHorizontal": "right",
              "barFillColor": "darkgreen",
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "barOpacity": 1,
              "name": "AATAC_seq_pvalue.bigWig"
            },
            "width": 20,
            "height": 50
          },
          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "DNase_seq_osteoblast_pvalue",
            "uid": "eYMEZTP0S6K5wWiYCk4Faw",
            "type": "horizontal-bar",
            "options": {
              "showTooltip": true,
              "align": "bottom",
              "labelColor": "[glyph-color]",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "labelShowResolution": false,
              "labelShowAssembly": true,
              "axisLabelFormatting": "scientific",
              "axisPositionHorizontal": "right",
              "barFillColor": "darkgreen",
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "barOpacity": 1,
              "name": "DNase_seq_pvalue.bigWig"
            },
            "width": 20,
            "height": 50
          },
          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "ENCFF327MED_H3K4me3_OB_pvalue",
            "uid": "IW9OV4zPS6awk2UBL_LsUQ",
            "type": "horizontal-bar",
            "options": {
              "showTooltip": true,
              "align": "bottom",
              "labelColor": "[glyph-color]",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "labelShowResolution": false,
              "labelShowAssembly": true,
              "axisLabelFormatting": "scientific",
              "axisPositionHorizontal": "right",
              "barFillColor": "darkgreen",
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "barOpacity": 1,
              "name": "ENCFF327MED_H3K4me3_pvalue.bigWig"
            },
            "width": 20,
            "height": 50
          },
          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "ENCFF103BYE_H3K4me1_OB_pvalue",
            "uid": "VUcUfgv0RkKyyEHcQyHpyw",
            "type": "horizontal-bar",
            "options": {
              "showTooltip": true,
              "align": "bottom",
              "labelColor": "[glyph-color]",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "labelShowResolution": false,
              "labelShowAssembly": true,
              "axisLabelFormatting": "scientific",
              "axisPositionHorizontal": "right",
              "barFillColor": "darkgreen",
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "barOpacity": 1,
              "name": "ENCFF103BYE_H3K4me1_pvalue.bigWig"
            },
            "width": 20,
            "height": 50
          },
          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "ENCFF048BRN_H3K27ac_OB_pvalue",
            "uid": "Wxf-e6ssRwOneW8l2PCQPw",
            "type": "horizontal-bar",
            "options": {
              "showTooltip": true,
              "align": "bottom",
              "labelColor": "[glyph-color]",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "labelShowResolution": false,
              "labelShowAssembly": true,
              "axisLabelFormatting": "scientific",
              "axisPositionHorizontal": "right",
              "barFillColor": "darkgreen",
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "barOpacity": 1,
              "name": "ENCFF048BRN_H3K27ac_pvalue.bigwig"
            },
            "width": 20,
            "height": 50
          }
        ],
        "bottom": [],
        "whole": [],
        "gallery": []
      },
      "uid": "EeRsoR8CQ1uXuQdP7STidg",
      "layout": {
        "x": 0,
        "y": 0,
        "w": 12,
        "h": 10
      },
      "initialYDomain": [
        1184062490.9641707,
        1184064890.9641707
      ]
    }
  ],
  "zoomLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  },
  "locationLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  },
  "valueScaleLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  }
}

export let OB_ViewConfig = {
  "editable": true,
  "zoomFixed": false,
  "trackSourceServers": [
    "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
    "//higlass.io/api/v1",
    "https://resgen.io/api/v1/gt/paper-data"
  ],
  "exportViewUrl": "/api/v1/viewconfs",
  "views": [
    {
      "editable": true,
      "initialXDomain": [
        -88077,
        111923
      ],
      "autocompleteSource": "/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
      "genomePositionSearchBox": {
        "autocompleteServer": "//higlass.io/api/v1",
        "autocompleteId": "P0PLbQMwTYGy-5uPIQid7A",
        "chromInfoServer": "//higlass.io/api/v1",
        "chromInfoId": "hg38",
        "visible": true
      },
      "tracks": {
        "center": [],
        "left": [],
        "right": [],
        "top": [
          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "MUSC_OB_HiC_loop",
            "uid": "XHFNPjKVTUi_6Kh7Aw8duA",
            "type": "1d-arcs",
            "options": {
              "showTooltip": true,
              "alternating": false,
              "annotationStyle": "box",
              "fillColor": "blue",
              "fillOpacity": 0.3,
              "fontSize": "10",
              "axisPositionHorizontal": "right",
              "labelColor": "black",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "minHeight": 20,
              "maxAnnotationHeight": null,
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "valueColumn": null,
              "colorEncoding": "itemRgb",
              "showTexts": false,
              "colorRange": [
                "#000000",
                "#652537",
                "#bf5458",
                "#fba273",
                "#ffffe0"
              ],
              "colorEncodingRange": false,
              "annotationHeight": 16,
              "name": "HiC_OB_loop.bed.beddb",
              "arcStyle": "ellipse",
              "flip1D": "no",
              "strokeColor": "purple",
              "strokeWidth": 3
            },
            "width": 1250,
            "height": 80
          },
          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "OB_chromhmm",
            // "uid": "Yl4Q6L9xSmCXeguWsVs-Tw",
            "type": "bedlike",
            "options": {
                "showTooltip": true,
                "alternating": false,
                "annotationStyle": "box",
                "fillColor": "blue",
                "fillOpacity": 0.3,
                "fontSize": "10",
                "axisPositionHorizontal": "right",
                "labelColor": "black",
                "labelPosition": "topLeft",
                "labelLeftMargin": 0,
                "labelRightMargin": 0,
                "labelTopMargin": 0,
                "labelBottomMargin": 0,
                "minHeight": 20,
                "maxAnnotationHeight": null,
                "trackBorderWidth": 0,
                "trackBorderColor": "black",
                "valueColumn": null,
                "colorEncoding": "itemRgb",
                "showTexts": false,
                "colorRange": [
                    "#000000",
                    "#652537",
                    "#bf5458",
                    "#fba273",
                    "#ffffe0"
                ],
                "colorEncodingRange": false,
                "annotationHeight": 16,
                "name": "E129_25_imputed12marks_dense.beddb"
            },
            "width": 1306,
            "height": 61
        },
          {
            "server": "//higlass.io/api/v1",
            "tilesetUid": "NyITQvZsS_mOFNlz5C2LJg",
            "uid": "WR2yThKfRNatI9lz0OL4lg",
            "type": "horizontal-chromosome-labels",
            "options": {
              "showTooltip": true,
              "color": "#808080",
              "stroke": "#ffffff",
              "fontSize": 12,
              "fontIsLeftAligned": false,
              "showMousePosition": false,
              "mousePositionColor": "#000000"
            },
            "width": 1250,
            "height": 30
          },
          {
            "server": "//higlass.io/api/v1",
            "tilesetUid": "P0PLbQMwTYGy-5uPIQid7A",
            "uid": "GAxNnq7bQ3W9OejRcamM9Q",
            "type": "horizontal-gene-annotations",
            "options": {
              "showTooltip": true,
              "fontSize": 10,
              "labelColor": "black",
              "labelBackgroundColor": "#ffffff",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "minHeight": 24,
              "plusStrandColor": "blue",
              "minusStrandColor": "red",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "showMousePosition": false,
              "mousePositionColor": "#000000",
              "geneAnnotationHeight": 16,
              "geneLabelPosition": "outside",
              "geneStrandSpacing": 4,
              "name": "Gene Annotations (hg38)"
            },
            "width": 1250,
            "height": 59
          },
          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "ATAC_seq_osteoblast_pvalue",
            "uid": "Q3Izx58GQ0-5xNDJEeClog",
            "type": "horizontal-bar",
            "options": {
              "showTooltip": true,
              "align": "bottom",
              "labelColor": "[glyph-color]",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "labelShowResolution": false,
              "labelShowAssembly": true,
              "axisLabelFormatting": "scientific",
              "axisPositionHorizontal": "right",
              "barFillColor": "darkgreen",
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "barOpacity": 1,
              "name": "AATAC_seq_osteoblast_pvalue.bigWig"
            },
            "width": 20,
            "height": 50
          },

          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "DNase_seq_osteoblast_pvalue",
            "uid": "eYMEZTP0S6K5wWiYCk4Faw",
            "type": "horizontal-bar",
            "options": {
              "showTooltip": true,
              "align": "bottom",
              "labelColor": "[glyph-color]",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "labelShowResolution": false,
              "labelShowAssembly": true,
              "axisLabelFormatting": "scientific",
              "axisPositionHorizontal": "right",
              "barFillColor": "darkgreen",
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "barOpacity": 1,
              "name": "DNase_seq_osteoblast_pvalue.bigWig"
            },
            "width": 20,
            "height": 50
          },
          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "ENCFF327MED_H3K4me3_OB_pvalue",
            "uid": "IW9OV4zPS6awk2UBL_LsUQ",
            "type": "horizontal-bar",
            "options": {
              "showTooltip": true,
              "align": "bottom",
              "labelColor": "[glyph-color]",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "labelShowResolution": false,
              "labelShowAssembly": true,
              "axisLabelFormatting": "scientific",
              "axisPositionHorizontal": "right",
              "barFillColor": "darkgreen",
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "barOpacity": 1,
              "name": "ENCFF327MED_H3K4me3_OB_pvalue.bigWig"
            },
            "width": 20,
            "height": 50
          },
          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "ENCFF103BYE_H3K4me1_OB_pvalue",
            "uid": "VUcUfgv0RkKyyEHcQyHpyw",
            "type": "horizontal-bar",
            "options": {
              "showTooltip": true,
              "align": "bottom",
              "labelColor": "[glyph-color]",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "labelShowResolution": false,
              "labelShowAssembly": true,
              "axisLabelFormatting": "scientific",
              "axisPositionHorizontal": "right",
              "barFillColor": "darkgreen",
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "barOpacity": 1,
              "name": "ENCFF103BYE_H3K4me1_OB_pvalue.bigWig"
            },
            "width": 20,
            "height": 50
          },
          {
            "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
            "tilesetUid": "ENCFF048BRN_H3K27ac_OB_pvalue",
            "uid": "Wxf-e6ssRwOneW8l2PCQPw",
            "type": "horizontal-bar",
            "options": {
              "showTooltip": true,
              "align": "bottom",
              "labelColor": "[glyph-color]",
              "labelPosition": "topLeft",
              "labelLeftMargin": 0,
              "labelRightMargin": 0,
              "labelTopMargin": 0,
              "labelBottomMargin": 0,
              "labelShowResolution": false,
              "labelShowAssembly": true,
              "axisLabelFormatting": "scientific",
              "axisPositionHorizontal": "right",
              "barFillColor": "darkgreen",
              "valueScaling": "linear",
              "trackBorderWidth": 0,
              "trackBorderColor": "black",
              "labelTextOpacity": 0.4,
              "barOpacity": 1,
              "name": "ENCFF048BRN_H3K27ac_OB_pvalue.bigwig"
            },
            "width": 20,
            "height": 50
          }
        ],
        "bottom": [],
        "whole": [],
        "gallery": []
      },
      "uid": "EeRsoR8CQ1uXuQdP7STidg",
      "layout": {
        "x": 0,
        "y": 0,
        "w": 12,
        "h": 10
      },
      "initialYDomain": [
        1184062490.9641707,
        1184064890.9641707
      ]
    }
  ],
  "zoomLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  },
  "locationLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  },
  "valueScaleLocks": {
    "locksByViewUid": {},
    "locksDict": {}
  }
}

export let hMSC_ViewConfig = {
    "editable": true,
    "zoomFixed": false,
    "trackSourceServers": [
      "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
      "//higlass.io/api/v1",
      "https://resgen.io/api/v1/gt/paper-data"
    ],
    "exportViewUrl": "/api/v1/viewconfs",
    "views": [
      {
        "editable": true,
        "initialXDomain": [
          -88077,
          111923
        ],
        "autocompleteSource": "/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
        "genomePositionSearchBox": {
          "autocompleteServer": "//higlass.io/api/v1",
          "autocompleteId": "P0PLbQMwTYGy-5uPIQid7A",
          "chromInfoServer": "//higlass.io/api/v1",
          "chromInfoId": "hg38",
          "visible": true
        },
        "tracks": {
          "center": [],
          "left": [],
          "right": [],
          "top": [
            {
              "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889/api/v1",
              "tilesetUid": "MUSC_hMSC_HiC_loop",
              "uid": "GgFVFn1QRg2p2H5JyFYsVA",
              "type": "1d-arcs",
              "options": {
                "showTooltip": true,
                "alternating": false,
                "annotationStyle": "box",
                "fillColor": "blue",
                "fillOpacity": 0.3,
                "fontSize": "10",
                "axisPositionHorizontal": "right",
                "labelColor": "black",
                "labelPosition": "topLeft",
                "labelLeftMargin": 0,
                "labelRightMargin": 0,
                "labelTopMargin": 0,
                "labelBottomMargin": 0,
                "minHeight": 20,
                "maxAnnotationHeight": null,
                "trackBorderWidth": 0,
                "trackBorderColor": "black",
                "valueColumn": null,
                "colorEncoding": "itemRgb",
                "showTexts": false,
                "colorRange": [
                  "#000000",
                  "#652537",
                  "#bf5458",
                  "#fba273",
                  "#ffffe0"
                ],
                "colorEncodingRange": false,
                "annotationHeight": 16,
                "name": "HiC_hMSC_loop.bed.beddb",
                "arcStyle": "ellipse",
                "flip1D": "no",
                "strokeColor": "purple",
                "strokeWidth": 3
              },
              "width": 1250,
              "height": 80
            },
            {
              "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
              "tilesetUid": "hMSC_chromhmm",
              "uid": "Yl4Q6L9xSmCXeguWsVs-Tw",
              "type": "bedlike",
              "options": {
                  "showTooltip": true,
                  "alternating": false,
                  "annotationStyle": "box",
                  "fillColor": "blue",
                  "fillOpacity": 0.3,
                  "fontSize": "10",
                  "axisPositionHorizontal": "right",
                  "labelColor": "black",
                  "labelPosition": "topLeft",
                  "labelLeftMargin": 0,
                  "labelRightMargin": 0,
                  "labelTopMargin": 0,
                  "labelBottomMargin": 0,
                  "minHeight": 20,
                  "maxAnnotationHeight": null,
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "valueColumn": null,
                  "colorEncoding": "itemRgb",
                  "showTexts": false,
                  "colorRange": [
                      "#000000",
                      "#652537",
                      "#bf5458",
                      "#fba273",
                      "#ffffe0"
                  ],
                  "colorEncodingRange": false,
                  "annotationHeight": 16,
                  "name": "E026_25_imputed12marks_dense.beddb"
              },
              "width": 1306,
              "height": 61
          },
            {
              "server": "//higlass.io/api/v1",
              "tilesetUid": "NyITQvZsS_mOFNlz5C2LJg",
              "uid": "WR2yThKfRNatI9lz0OL4lg",
              "type": "horizontal-chromosome-labels",
              "options": {
                "showTooltip": true,
                "color": "#808080",
                "stroke": "#ffffff",
                "fontSize": 12,
                "fontIsLeftAligned": false,
                "showMousePosition": false,
                "mousePositionColor": "#000000"
              },
              "width": 1250,
              "height": 30
            },
            {
              "server": "//higlass.io/api/v1",
              "tilesetUid": "P0PLbQMwTYGy-5uPIQid7A",
              "uid": "GAxNnq7bQ3W9OejRcamM9Q",
              "type": "horizontal-gene-annotations",
              "options": {
                "showTooltip": true,
                "fontSize": 10,
                "labelColor": "black",
                "labelBackgroundColor": "#ffffff",
                "labelPosition": "topLeft",
                "labelLeftMargin": 0,
                "labelRightMargin": 0,
                "labelTopMargin": 0,
                "labelBottomMargin": 0,
                "minHeight": 24,
                "plusStrandColor": "blue",
                "minusStrandColor": "red",
                "trackBorderWidth": 0,
                "trackBorderColor": "black",
                "showMousePosition": false,
                "mousePositionColor": "#000000",
                "geneAnnotationHeight": 16,
                "geneLabelPosition": "outside",
                "geneStrandSpacing": 4,
                "name": "Gene Annotations (hg38)"
              },
              "width": 1250,
              "height": 59
            },
            {
              "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
              "tilesetUid": "ATAC_seq_hMSC_pvalue",
              "uid": "DCVvVuk7Sr-AYYgaYbcbVg",
              "type": "horizontal-bar",
              "options": {
                "showTooltip": true,
                "align": "bottom",
                "labelColor": "[glyph-color]",
                "labelPosition": "topLeft",
                "labelLeftMargin": 0,
                "labelRightMargin": 0,
                "labelTopMargin": 0,
                "labelBottomMargin": 0,
                "labelShowResolution": false,
                "labelShowAssembly": true,
                "axisLabelFormatting": "scientific",
                "axisPositionHorizontal": "right",
                "barFillColor": "darkgreen",
                "valueScaling": "linear",
                "trackBorderWidth": 0,
                "trackBorderColor": "black",
                "labelTextOpacity": 0.4,
                "barOpacity": 1,
                "name": "ATAC_seq_hMSC_pvalue.bigWig"
              },
              "width": 20,
              "height": 50
            },
            {
              "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
              "tilesetUid": "DNase_seq_hMSC_pvalue",
              "uid": "YFWut5Y5QpCZB6mmyumEAQ",
              "type": "horizontal-bar",
              "options": {
                "showTooltip": true,
                "align": "bottom",
                "labelColor": "[glyph-color]",
                "labelPosition": "topLeft",
                "labelLeftMargin": 0,
                "labelRightMargin": 0,
                "labelTopMargin": 0,
                "labelBottomMargin": 0,
                "labelShowResolution": false,
                "labelShowAssembly": true,
                "axisLabelFormatting": "scientific",
                "axisPositionHorizontal": "right",
                "barFillColor": "darkgreen",
                "valueScaling": "linear",
                "trackBorderWidth": 0,
                "trackBorderColor": "black",
                "labelTextOpacity": 0.4,
                "barOpacity": 1,
                "name": "DNase_seq_hMSC_pvalue.bigWig"
              },
              "width": 20,
              "height": 50
            },
            {
              "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
              "tilesetUid": "ENCFF757SDY_hMSC_H3K9ac_pvalue",
              "uid": "dC-9K38WSb2q_BIityUR2g",
              "type": "horizontal-bar",
              "options": {
                "showTooltip": true,
                "align": "bottom",
                "labelColor": "[glyph-color]",
                "labelPosition": "topLeft",
                "labelLeftMargin": 0,
                "labelRightMargin": 0,
                "labelTopMargin": 0,
                "labelBottomMargin": 0,
                "labelShowResolution": false,
                "labelShowAssembly": true,
                "axisLabelFormatting": "scientific",
                "axisPositionHorizontal": "right",
                "barFillColor": "darkgreen",
                "valueScaling": "linear",
                "trackBorderWidth": 0,
                "trackBorderColor": "black",
                "labelTextOpacity": 0.4,
                "barOpacity": 1,
                "name": "ENCFF757SDY_hMSC_H3K9ac_pvalue.bigWig"
              },
              "width": 1250,
              "height": 54
            },
            {
              "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
              "tilesetUid": "ENCFF611FKW_hMSC_H3K4me3_pvalue",
              "uid": "X-oiyO52TpGhiOdROd-c7w",
              "type": "horizontal-bar",
              "options": {
                "showTooltip": true,
                "align": "bottom",
                "labelColor": "[glyph-color]",
                "labelPosition": "topLeft",
                "labelLeftMargin": 0,
                "labelRightMargin": 0,
                "labelTopMargin": 0,
                "labelBottomMargin": 0,
                "labelShowResolution": false,
                "labelShowAssembly": true,
                "axisLabelFormatting": "scientific",
                "axisPositionHorizontal": "right",
                "barFillColor": "darkgreen",
                "valueScaling": "linear",
                "trackBorderWidth": 0,
                "trackBorderColor": "black",
                "labelTextOpacity": 0.4,
                "barOpacity": 1,
                "name": "ENCFF611FKW_hMSC_H3K4me3_pvalue.bigWig"
              },
              "width": 20,
              "height": 50
            },
            {
              "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
              "tilesetUid": "ENCFF648BRC_hMSC_H3K4me1_pvalue",
              "uid": "a3xElaOoS-OikQyPFppGaQ",
              "type": "horizontal-bar",
              "options": {
                "showTooltip": true,
                "align": "bottom",
                "labelColor": "[glyph-color]",
                "labelPosition": "topLeft",
                "labelLeftMargin": 0,
                "labelRightMargin": 0,
                "labelTopMargin": 0,
                "labelBottomMargin": 0,
                "labelShowResolution": false,
                "labelShowAssembly": true,
                "axisLabelFormatting": "scientific",
                "axisPositionHorizontal": "right",
                "barFillColor": "darkgreen",
                "valueScaling": "linear",
                "trackBorderWidth": 0,
                "trackBorderColor": "black",
                "labelTextOpacity": 0.4,
                "barOpacity": 1,
                "name": "ENCFF648BRC_hMSC_H3K4me1_pvalue.bigWig"
              },
              "width": 20,
              "height": 50
            },
            {
              "server": "http://ec2-3-236-122-176.compute-1.amazonaws.com:8889//api/v1",
              "tilesetUid": "ENCFF223NOV_hMSC_H3K27Ac_pvalue",
              "uid": "HyrvZBMfTaKXRKR21Ax5EA",
              "type": "horizontal-bar",
              "options": {
                "showTooltip": true,
                "align": "bottom",
                "labelColor": "[glyph-color]",
                "labelPosition": "topLeft",
                "labelLeftMargin": 0,
                "labelRightMargin": 0,
                "labelTopMargin": 0,
                "labelBottomMargin": 0,
                "labelShowResolution": false,
                "labelShowAssembly": true,
                "axisLabelFormatting": "scientific",
                "axisPositionHorizontal": "right",
                "barFillColor": "darkgreen",
                "valueScaling": "linear",
                "trackBorderWidth": 0,
                "trackBorderColor": "black",
                "labelTextOpacity": 0.4,
                "barOpacity": 1,
                "name": "ENCFF223NOV_hMSC_H3K27Ac_pvalue.bigWig"
              },
              "width": 20,
              "height": 50
            }
          ],
          "bottom": [],
          "whole": [],
          "gallery": []
        },
        "uid": "EeRsoR8CQ1uXuQdP7STidg",
        "layout": {
          "x": 0,
          "y": 0,
          "w": 12,
          "h": 10
        },
        "initialYDomain": [
          1184062490.9641707,
          1184064890.9641707
        ]
      }
    ],
    "zoomLocks": {
      "locksByViewUid": {},
      "locksDict": {}
    },
    "locationLocks": {
      "locksByViewUid": {},
      "locksDict": {}
    },
    "valueScaleLocks": {
      "locksByViewUid": {},
      "locksDict": {}
    }
  }