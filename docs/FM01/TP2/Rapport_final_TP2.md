# Rapport TP 2 | Développement d'interfaces frontend 

## 1. Outils utilisés
- Chrome / Lighthouse - Wave

# 2. Première analyse de performances
| Métrique | Avant optimisation | 
| --- | --- | 
| **LCP** | 3,2s |
| **CLS** | 0 |
| **TBT** | 1520ms |
| **Score global de performance** | 61 |


![Screenshot des données de performance avant les ajout du TP2](image.png)

# 3. Deuxième analyse de performances
| Métrique | Après optimisation | 
| --- | --- | 
| **LCP** | 4,7s |
| **CLS** | 0 |
| **TBT** | 0ms |
| **Score global de performance** | 83 |

![Screenshot des données de performances après les ajout du TP2](image-1.png)


# 4. Compraison et explication des procédés utilisés
### A. Le LCP
Le LCP est le point que j'ai le plus redouter. Avant les changements il était à 3,2s puis ensuite est passé à 4,7s.

Pour ce qui concerne le temps de 3,2s j'ai découvert avec les instruction de lighthouse que cela était du majoritairement au extensions chrome. Cependant il était indiqué que du code JavaScript ralentissait le chargement or aucun code JS n'est présent j'ai donc ignorer ce détail.

Suite aux changement le LCP est monté à 4,7s, dans le rapport lighthouse il est indiqué que c'est le chargement du fichier CSS qui augmente ce temps. J'ai donc essayé de mettre le CSS directement dans le HTML ce qui n'as rien changé. J'ai pourtant bien fais attention à l'affichage des images (affichage tardif des images de formateurs, priorité de chargement pour l'image d'accroche) cependant cela n'a pas diminué le LCP. 

J'ai donc laissé le fichier CSS afin de bien suivre les consignes du TP2

### B. Le CLS 
En ce qui concerne le CLS, je n'ai pas eu de difficulté sur ça. Il a toujours été à 0. Pour cela j'ai toujours défini une dimension prédéfini pour chaque images.

### C. Le TBT 
Le TBT à été une chose qui me faisait assez "peur" étant donné la valeur assez élevé au premier rapport de lighthouse (1520ms).
Pour pouvoir passer de ce score à un score de 0ms je me suis rendu compte que c'est assez simple contrairement qu LCP. 

- J'ai utilisé un chargement différé et un chargement asyncronisé pour toutes les images SAUF l'image d'accroche. 
- En ce qui concerne les polices j'ai tout simplement télécharger les deux fichiers de police (regular et bold) puis utilisé la propriété `font-display: swap;` pour pouvoir afficher le texte directement. 

# 5. Fichier joints
* `docs/rapport-TP2-avant.html` : Rapport initial de lighthouse
* `docs/rapport-TP2-apres.html` : Rapport final de lighthouse 