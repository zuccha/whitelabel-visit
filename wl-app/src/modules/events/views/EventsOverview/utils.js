export const mapCategoryToColor = category => ({
  art:         '#F44336',
  conference:  '#FFC107',
  fair:        '#3F51B5',
  sport:       '#4CAF50',
}[category] || '#000000');

export const mapCategoryToLabel = category => ({
  art:         'Art & Concerts',
  conference:  'Conferences',
  fair:        'Fairs & Exhibitions',
  sport:       'Sport',
}[category] || '');
