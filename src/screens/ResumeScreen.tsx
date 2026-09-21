import React from 'react';
import {StyleSheet, View} from 'react-native';
import Pdf from 'react-native-pdf';

function ResumeScreen(): React.JSX.Element {
  const source = {
    uri: 'bundle-assets://ResumeIbrahimPoonawala.pdf',
  };

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        style={styles.pdf}
        trustAllCerts={false}
        enablePaging={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },

  pdf: {
    flex: 1,
    width: '100%',
  },
});

export default ResumeScreen;