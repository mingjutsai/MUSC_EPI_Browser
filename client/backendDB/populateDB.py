from pymongo import MongoClient
import json
import pandas as pd

client = MongoClient('localhost', 27017)
db = client.TableView
# find the collection
collection = db["dbSNP153_Annotation"]

def chunck_processing(index, df, verbose=False, generateFile=False):
    snp_entry = {}
    def addDataIfExist(r, label):
        if not pd.isna(r[label]):
            return r[label]
        else:
            return ""
    for i, r in df.iterrows():
        document = { 
            "RSID": r.RSID,
            "Chr": r["#Chr"], 
             "Start": r.Start, 
             "End": r.End, 
             "Ref": r.Ref, 
             "Alt": r.Alt,
             "Region": r.Region_Ensembl,
            "GeneInfo_DistNG_Ensembl":  addDataIfExist(r, "GeneInfo_DistNG_Ensembl"),
            "NHCFV":{
                     'ChromHMM':addDataIfExist(r, "chromHMM_E095_25"),
                    "Fantom5": addDataIfExist(r, "Fantom5_FibroblastCardiac_ctss"),
                    "ATAC": addDataIfExist(r, "ATACPEAK_NHCFV"),
                    "Footprinting_MPBS": addDataIfExist(r, "Footprinting_MPBS_NHCFV"),
                "HomerSig_Regulaotry_Promoter": addDataIfExist(r, "HomerSig_NHCFV_Regulaotry-Promoter"),
                'HomerSig_Promoter_Regulaotry': addDataIfExist(r, "HomerSig_NHCFV_Promoter-Regulaotry"),
                
                },  
             "GeneName_ID_Ensembl": addDataIfExist(r, "GeneName_ID_Ensembl"),
            "AAChange_Ensembl": addDataIfExist(r, "AAChange_Ensembl"),
            "gwasCatalog": addDataIfExist(r, "gwasCatalog")
            }
        collection.insert_one(document)


df_chunk = pd.read_csv("unfinished.txt", sep="\t", chunksize=100000, 
dtype={'ExonicFunc_Ensembl': str,'AAChange_Ensembl': str, 'gwasCatalog': str,'ChromHMM': str,'Fantom5':str,"ATAC":str,'Footprinting_MPBS':str,"HomerSig_Regulaotry_Promoter":str,"HomerSig_Promoter_Regulaotry":str})

for i, chunk in enumerate(df_chunk):
    chunck_processing(i, chunk)