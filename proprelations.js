var proprelations={"http://www.w3.org/2004/02/skos/core#definition": {"from": ["http://www.purl.org/cuneiform#WordFormOccurance", "http://lemon-model.net/lemon#WordForm", "http://www.purl.org/cuneiform#TransliterationCharOccurrence", "http://www.purl.org/cuneiform#TransliterationLine"], "to": []}, "http://www.w3.org/2000/01/rdf-schema#member": {"from": ["http://www.purl.org/graphemon#GraphemeReadingCollection", "http://www.purl.org/cuneiform#GlyphCollection", "http://www.purl.org/cuneiform#WordFormOccurrenceCollection", "http://www.purl.org/cuneiform#CharOccurrenceCollection"], "to": ["http://www.purl.org/graphemon#GraphemeReading", "http://lemon-model.net/lemon#WordForm", "http://www.purl.org/cuneiform#TransliterationCharOccurrence", "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph"]}, "http://www.purl.org/cuneiform#contains": {"from": ["http://www.purl.org/cuneiform#WordFormOccurance", "http://www.purl.org/cuneiform#TransliterationCharOccurrence"], "to": ["http://www.purl.org/graphemon#Grapheme", "http://www.purl.org/cuneiform#TransliterationLine"]}, "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {"from": ["http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph", "http://www.w3.org/2004/02/skos/core#Collection", "http://www.purl.org/cuneiform#Line", "http://www.purl.org/graphemon#GraphemeReading", "http://www.purl.org/cuneiform#WordFormOccurance", "http://www.purl.org/graphemon#GraphemeCollection", "http://lemon-model.net/lemon#Lexicon", "http://www.purl.org/cuneiform#GlyphCollection", "http://www.purl.org/cuneiform#Transliteration", "http://www.purl.org/cuneiform#TransliterationCharOccurrence", "http://www.w3.org/2002/07/owl#DatatypeProperty", "http://www.purl.org/graphemon#GraphemeVariantCollection", "http://www.purl.org/cuneiform#CharOccurrenceCollection", "http://lemon-model.net/lemon#WordForm", "http://www.purl.org/cuneiform#Side", "http://www.purl.org/cuneiform#Tablet", "http://www.purl.org/graphemon#Grapheme", "http://www.cidoc-crm.org/cidoc-crm/TX5_Reading", "http://www.w3.org/2002/07/owl#Class", "http://www.purl.org/cuneiform#TransliterationLine", "http://www.purl.org/cuneiform#WordFormOccurrenceCollection", "http://www.cidoc-crm.org/cidoc-crm/TX1_WrittenText", "http://www.purl.org/graphemon#GraphemeVariant", "http://www.purl.org/graphemon#GraphemeReadingCollection", "http://www.w3.org/2002/07/owl#ObjectProperty"], "to": ["http://www.w3.org/2002/07/owl#Class", "http://www.w3.org/2002/07/owl#ObjectProperty"]}, "http://www.purl.org/cuneiform#positionOnTabletSide": {"from": ["http://www.purl.org/cuneiform#TransliterationCharOccurrence"], "to": []}, "http://www.purl.org/cuneiform#consistsOf": {"from": ["http://www.purl.org/cuneiform#WordFormOccurance", "http://www.purl.org/cuneiform#TransliterationLine"], "to": ["http://www.purl.org/cuneiform#WordFormOccurance", "http://www.purl.org/cuneiform#TransliterationCharOccurrence"]}, "http://www.purl.org/cuneiform#prevWord": {"from": ["http://www.purl.org/cuneiform#WordFormOccurance"], "to": ["http://www.purl.org/cuneiform#WordFormOccurance"]}, "http://www.purl.org/cuneiform#lineNumber": {"from": ["http://www.purl.org/cuneiform#TransliterationCharOccurrence"], "to": []}, "http://www.w3.org/2000/01/rdf-schema#label": {"from": ["http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph", "http://www.w3.org/2004/02/skos/core#Collection", "http://www.purl.org/cuneiform#Line", "http://www.purl.org/graphemon#GraphemeReading", "http://www.purl.org/cuneiform#WordFormOccurance", "http://www.purl.org/graphemon#GraphemeCollection", "http://lemon-model.net/lemon#Lexicon", "http://www.purl.org/cuneiform#GlyphCollection", "http://www.purl.org/cuneiform#Transliteration", "http://www.purl.org/cuneiform#TransliterationCharOccurrence", "http://www.purl.org/graphemon#GraphemeVariantCollection", "http://www.purl.org/cuneiform#CharOccurrenceCollection", "http://lemon-model.net/lemon#WordForm", "http://www.purl.org/cuneiform#Side", "http://www.purl.org/cuneiform#Tablet", "http://www.purl.org/graphemon#Grapheme", "http://www.cidoc-crm.org/cidoc-crm/TX5_Reading", "http://www.w3.org/2002/07/owl#Class", "http://www.purl.org/cuneiform#TransliterationLine", "http://www.purl.org/cuneiform#WordFormOccurrenceCollection", "http://www.cidoc-crm.org/cidoc-crm/TX1_WrittenText", "http://www.purl.org/graphemon#GraphemeVariant"], "to": []}, "http://www.purl.org/cuneiform#prev": {"from": ["http://www.purl.org/cuneiform#TransliterationCharOccurrence"], "to": ["http://www.purl.org/cuneiform#TransliterationCharOccurrence"]}, "http://xmlns.com/foaf/0.1/image": {"from": ["http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph", "http://www.purl.org/cuneiform#Side", "http://www.purl.org/cuneiform#Line"], "to": []}, "http://www.purl.org/cuneiform#isDamaged": {"from": ["http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph"], "to": []}, "http://www.cidoc-crm.org/cidoc-crm/TXP8_is_component_of": {"from": ["http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph"], "to": []}, "http://www.purl.org/cuneiform#isAttested": {"from": ["http://lemon-model.net/lemon#WordForm"], "to": ["http://www.purl.org/cuneiform#WordFormOccurance"]}, "http://www.purl.org/cuneiform#nextInWord": {"from": ["http://www.purl.org/cuneiform#TransliterationCharOccurrence"], "to": ["http://www.purl.org/cuneiform#TransliterationCharOccurrence"]}, "http://www.purl.org/graphemon#prevGlyph": {"from": ["http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph"], "to": ["http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph"]}, "http://lemon-model.net/lemon#writtenRepASCII": {"from": ["http://lemon-model.net/lemon#WordForm", "http://www.purl.org/cuneiform#TransliterationLine"], "to": []}, "http://www.purl.org/cuneiform#nextWord": {"from": ["http://www.purl.org/cuneiform#WordFormOccurance"], "to": ["http://www.purl.org/cuneiform#WordFormOccurance"]}, "http://www.cidoc-crm.org/cidoc-crm/TXP3_is_rendered_by": {"from": ["http://www.cidoc-crm.org/cidoc-crm/TX5_Reading", "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph", "http://www.purl.org/cuneiform#Line"], "to": ["http://www.purl.org/cuneiform#WordFormOccurance", "http://www.purl.org/cuneiform#TransliterationCharOccurrence", "http://www.purl.org/cuneiform#TransliterationLine"]}, "http://www.purl.org/cuneiform#partOf": {"from": ["http://www.purl.org/cuneiform#TransliterationCharOccurrence"], "to": ["http://www.purl.org/cuneiform#WordFormOccurance"]}, "http://www.purl.org/cuneiform#positionInWord": {"from": ["http://www.purl.org/cuneiform#TransliterationCharOccurrence"], "to": []}, "http://www.purl.org/graphemon#nextGlyph": {"from": ["http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph"], "to": ["http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph"]}, "http://www.purl.org/cuneiform#charIndex": {"from": ["http://www.purl.org/cuneiform#TransliterationCharOccurrence"], "to": []}, "http://lemon-model.net/lemon#writtenRepUnicode": {"from": ["http://lemon-model.net/lemon#WordForm", "http://www.purl.org/cuneiform#TransliterationCharOccurrence", "http://www.purl.org/cuneiform#TransliterationLine"], "to": []}, "http://www.purl.org/cuneiform#prevInWord": {"from": ["http://www.purl.org/cuneiform#TransliterationCharOccurrence", "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph"], "to": ["http://www.purl.org/cuneiform#TransliterationCharOccurrence", "http://www.cidoc-crm.org/cidoc-crm/TX9_Glyph"]}, "http://www.purl.org/graphemon#hasGraphemeReading": {"from": ["http://www.purl.org/cuneiform#WordFormOccurance", "http://www.purl.org/cuneiform#TransliterationCharOccurrence", "http://www.purl.org/graphemon#Grapheme"], "to": ["http://www.purl.org/graphemon#GraphemeReading"]}, "http://www.purl.org/graphemon#variant": {"from": ["http://www.purl.org/graphemon#Grapheme"], "to": ["http://www.purl.org/graphemon#GraphemeVariant"]}, "http://www.w3.org/2000/01/rdf-schema#subClassOf": {"from": ["http://www.w3.org/2002/07/owl#ObjectProperty"], "to": ["http://www.w3.org/2002/07/owl#Class"]}, "http://www.purl.org/cuneiform#hasSurface": {"from": ["http://www.purl.org/cuneiform#Tablet"], "to": ["http://www.purl.org/cuneiform#Side"]}, "http://www.cidoc-crm.org/cidoc-crm/TXP10_read_by": {"from": ["http://www.cidoc-crm.org/cidoc-crm/TX1_WrittenText"], "to": ["http://www.cidoc-crm.org/cidoc-crm/TX5_Reading"]}, "http://www.cidoc-crm.org/cidoc-crm/P56_found_on": {"from": ["http://www.cidoc-crm.org/cidoc-crm/TX1_WrittenText"], "to": ["http://www.purl.org/cuneiform#Tablet"]}}