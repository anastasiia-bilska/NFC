alert(window.NDEFReader);

// async function readTag() {
//   if ('NDEFReader' in window) {
//     const ndef = new NDEFReader();

//     try {
//       await ndef.scan();
//       ndef.onreading = (event) => {
//         const decoder = new TextDecoder();
//         for (const record of event.message.records) {
//           alert('Record type: ' + record.recordType);
//           alert('MIME type: ' + record.mediaType);
//           alert('=== data ===\n' + decoder.decode(record.data));
//         }
//       };
//     } catch (error) {
//       alert(error);
//     }
//   } else {
//     alert('Web NFC is not supported.');
//   }
// }

// async function writeTag() {
//   if ('NDEFReader' in window) {
//   try {
//     await ndef.write('Аптека №911');
//     alert('write success');
//     await readTag();
//   } catch {
//     alert('Write failed');
//   }
//   } else {
//   alert('Web NFC is not supported.');
//   }
// }

const readButton = document.querySelector('#read');

const writeButton = document.querySelector('#write');

const input = document.querySelector('#text');

input.addEventListener('input', () => {
  console.log(input.value);
});

readButton.addEventListener('click', async () => {
  if ('NDEFReader' in window) {
    const ndef = new NDEFReader();
    try {
      await ndef.scan();
      ndef.onreading = (event) => {
        const decoder = new TextDecoder();
        for (const record of event.message.records) {
          alert('Record type: ' + record.recordType);
          alert('MIME type: ' + record.mediaType);
          alert('=== data ===\n' + decoder.decode(record.data));
        }
      };
    } catch (error) {
      alert(error);
    }
  } else {
    alert('Web NFC is not supported.');
  }
});

writeButton.addEventListener('click', async () => {
  if ('NDEFReader' in window) {
    const ndef = new NDEFReader();
    try {
      await ndef.write(text.value, { timeout: 3_000 });
      alert('write success');
    } catch (e) {
      console.log(e);
      alert('Write failed');
    }
  } else {
    alert('Web NFC is not supported.');
  }
});
