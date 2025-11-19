// Optics - Fourier Transform - Chapter 9
// 16 programs

export const programs = [
  {
    "id": "for",
    "title": "for - F10FTGAUSGS\r",
    "description": "F10FTGAUSGS\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F10FTGAUSGS\n# Complex Fourier transformation of Gauss function for\n# two values of a and for general Fourier Transformation.\n# The maximum is at i = 0. The FT (inverse) of the FT is also calculated.\n\ni = np.arange(0, 325+1, 1)\nA = 1\na = 100\naa = 50\ny1 = A*np.exp(-a*((i/255)**2))\ny2 = A*np.exp(-aa*((i/255)**2))\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(i/255,y1,i/255,y2)\n\nplt.xlim(0, 1.5)\nplt.ylim(0, 1)\n\nplt.xlabel('i/255')\nplt.legend(['y1', 'y2'])\n\nc1 = fft(y1)\nc2 = fft(y2)\nN = length(c2)-1; # N=325\nj=(0:1:N)\nplt.subplot(3, 1, 2)\n\nplt.plot(j,real(c1)\n/np.sqrt(N+1),j,real(c2)/np.sqrt(N+1))\nplt.xlim(0, 400)\nplt.ylim(0, 2)\n\nplt.xlabel('j')\nplt.legend(['real(c1)/sqrt(N+1)', 'real(c2)/sqrt(N+1)'])\nzf1 = ifft(c1)\nzf2 = ifft(c2)\nN2 = length(zf2)-1\ni = (0:1:N2)\nplt.subplot(3, 1, 3)\n\nplt.plot(i/255,zf1,i/255,zf2)\n\nplt.xlim(0, 0.6)\nplt.ylim(0, 1)\n\nplt.xlabel('i/255')\nplt.legend(['zf1', 'zf2'])\n# The coordinate is again i/255\n\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F10FTGAUSGS\n% Complex Fourier transformation of Gauss function for\n% two values of a and for general Fourier Transformation.\n% The maximum is at i = 0. The FT (inverse) of the FT is also calculated.\nfunction F10FTGAUSGS;\ni = (0:1:325);\nA = 1;\na = 100;\naa = 50;\ny1 = A*exp(-a*((i/255).^2));\ny2 = A*exp(-aa*((i/255).^2));\n\nfigure(1);\nsubplot(3,1,1);\nplot(i/255,y1,i/255,y2);\naxis([0 1.5 0 1]);\nxlabel('i/255');\nlegend('y1','y2');\n\nc1 = fft(y1);\nc2 = fft(y2);\nN = length(c2)-1; % N=325\nj=(0:1:N);\n\nsubplot(3,1,2);\nplot(j,real(c1)/sqrt(N+1),j,real(c2)/sqrt(N+1));\naxis([0 400 0 2]);\nxlabel('j');\nlegend('real(c1)/sqrt(N+1)','real(c2)/sqrt(N+1)');\n\nzf1 = ifft(c1);\nzf2 = ifft(c2);\n\n\nN2 = length(zf2)-1;\ni = (0:1:N2);\n\nsubplot(3,1,3);\nplot(i/255,zf1,i/255,zf2);\naxis([0 0.6 0 1]);\nxlabel('i/255');\nlegend('zf1','zf2');\n% The coordinate is again i/255\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F10FTGAUSGS",
    "tags": [
      "chapter9",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "F11CONVOS",
    "title": "F11CONVOS - F11CONVOS\r",
    "description": "F11CONVOS\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F11CONVOS\n# Convolution integral for functions y and S\n\nb2 = 0.2\nf = 800\na = 1\nLamda = 0.0005\nk = (2*np.pi)/Lamda\nX = np.arange(0, 1+0.001, 0.001)\n# tol = 0.01\n# Function S\nSx = S(X)\n# Function y\nyx = y(X)\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(X,yx)\n\nplt.xlim(0, 1)\nplt.ylim(0, 1.5)\n\nplt.xlabel('X')\nplt.legend(['y(X)'])\nplt.subplot(2, 2, 2)\n\nplt.plot(X,Sx)\n\nplt.xlim(0, 1)\nplt.ylim(-1, 1)\n\nplt.xlabel('X')\nplt.legend(['S(X)'])\nnx = length(X)\nfor jk=1:nx\n    Ix(jk) = 2*quad(@If,0,0.5,[],[],X(jk))\nplt.subplot(2, 1, 2)\n\nplt.plot(X,Ix,X,Sx)\n\nplt.xlim(0, 1)\nplt.ylim(-1, 1)\n\nplt.xlabel('X')\nplt.legend(['I(X)', 'S(X)'])\nOut = (logical(b2-X)>=0)\nOut = np.sin((k*a*X)/f)\nOut = y(XX)*(np.sin(k*a*(X-XX)/f))\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F11CONVOS\n% Convolution integral for functions y and S\nfunction F11CONVOS;\nglobal k a f b2;\nb2 = 0.2;\nf = 800;\na = 1;\nLamda = 0.0005;\nk = (2*pi)/Lamda;\n\nX = (0:0.001:1);\n% tol = 0.01;\n% Function S\nSx = S(X);\n\n% Function y\nyx = y(X);\n\nfigure(1);\nsubplot(2,2,1);\nplot(X,yx);\naxis([0 1 0 1.5]);\nxlabel('X');\nlegend('y(X)');\n\nsubplot(2,2,2);\nplot(X,Sx);\naxis([0 1 -1 1]);\nxlabel('X');\nlegend('S(X)');\n\nnx = length(X);\nfor jk=1:nx\n    Ix(jk) = 2*quad(@If,0,0.5,[],[],X(jk));\nend;\n\nsubplot(2,1,2);\nplot(X,Ix,X,Sx);\naxis([0 1 -1 1]);\nxlabel('X');\nlegend('I(X)','S(X)');\n\nfunction Out=y(X)\nglobal b2;\nOut = (logical(b2-X)>=0);\n\nfunction Out=S(X)\nglobal k a f;\nOut = sin((k*a*X)/f);\n\nfunction Out=If(XX,X)\nglobal k a f;\nOut = y(XX).*(sin(k*a*(X-XX)/f));",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F11CONVOS",
    "tags": [
      "chapter9",
      "fourier-transform",
      "convolution"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Convolution",
        "url": "https://en.wikipedia.org/wiki/Convolution"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "F12FTDISC1S",
    "title": "F12FTDISC1S - F12FTDISC1S\r",
    "description": "F12FTDISC1S\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F12FTDISC1S\n\n# Graph of cosine functions depending on i = 1,2,3....and frequencies 1/128,2/128\n# and so on to 130/128. Look for the repetition.\n\n# Length interval is i = 1,2,3...\n\ni = np.arange(0, 140+1, 1)\n# 1.Frequencies\n# f = 1/128, 2/128, 3/128\ny1 = np.cos(2*np.pi*(1/128)*i)\ny2 = np.cos(2*np.pi*(2/128)*i)\ny3 = np.cos(2*np.pi*(3/128)*i)\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(i,y1,i,y2,i,y3)\n\nplt.xlim(0, 140)\nplt.ylim(-1, 1)\n\nplt.xlabel('i')\nplt.legend(['y1', 'y2', 'y3'])\n\n# 2.Frequency 64/128\ny64 = np.cos(2*np.pi*(64/128)*i)\nplt.subplot(3, 1, 2)\n\nplt.plot(i,y64)\n\nplt.xlim(0, 140)\nplt.ylim(-1, 1)\n\nplt.xlabel('i')\nplt.legend(['y64'])\n\n# 3.Frequencies\n# 127/128, 128/128, 129/128, 130/128\n\ny127 = np.cos(2*np.pi*(127/128)*i)\ny128 = np.cos(2*np.pi*(128/128)*i); # will not show up on the graph\ny129 = np.cos(2*np.pi*(129/128)*i); # same as 127/128 and 1/128\ny130 = np.cos(2*np.pi*(130/128)*i); # same as 2/128\n\nplt.subplot(3, 1, 3)\n\nplt.plot(i,y127,i,y128,i,y129,i,y130)\n\nplt.xlim(0, 140)\nplt.ylim(-1, 1)\n\nplt.xlabel('i')\nplt.legend(['y127', 'y128', 'y129', 'y130'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F12FTDISC1S\n\n% Graph of cosine functions depending on i = 1,2,3....and frequencies 1/128,2/128\n% and so on to 130/128. Look for the repetition.\n\n% Length interval is i = 1,2,3...\nfunction F12FTDISC1S;\ni = (0:1:140);\n\n% 1.Frequencies\n% f = 1/128, 2/128, 3/128\ny1 = cos(2*pi*(1/128)*i);\ny2 = cos(2*pi*(2/128)*i);\ny3 = cos(2*pi*(3/128)*i);\n\nfigure(1);\nsubplot(3,1,1);\nplot(i,y1,i,y2,i,y3);\naxis([0 140 -1 1]);\nxlabel('i');\nlegend('y1','y2','y3');\n\n% 2.Frequency 64/128\ny64 = cos(2*pi*(64/128)*i);\n\nsubplot(3,1,2);\nplot(i,y64);\naxis([0 140 -1 1]);\nxlabel('i');\nlegend('y64');\n\n% 3.Frequencies\n% 127/128, 128/128, 129/128, 130/128\n\ny127 = cos(2*pi*(127/128)*i);\ny128 = cos(2*pi*(128/128)*i); % will not show up on the graph\ny129 = cos(2*pi*(129/128)*i); % same as 127/128 and 1/128\ny130 = cos(2*pi*(130/128)*i); % same as 2/128\n\nsubplot(3,1,3);\nplot(i,y127,i,y128,i,y129,i,y130);\naxis([0 140 -1 1]);\nxlabel('i');\nlegend('y127','y128','y129','y130');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F12FTDISC1S",
    "tags": [
      "chapter9",
      "fourier-transform",
      "frequency"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Frequency",
        "url": "https://en.wikipedia.org/wiki/Frequency"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "show",
    "title": "show - F13DTDISC2S\r",
    "description": "F13DTDISC2S\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F13DTDISC2S\n# The cos-function show \"mirror\" symmetry around the\n# middle of the interval, at the beginning and at the end.\n\n# Length interval is 1,2,3...\n# 1.Frequencies f = 1/128, 2/128, 3/128\ni = np.arange(0, 127+1, 1)\ny1 = np.cos(2*np.pi*(1/128)*i)\ny2 = np.cos(2*np.pi*(2/128)*i)\ny3 = np.cos(2*np.pi*(63/128)*i)\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(i,y1,i,y2,i,y3)\n\nplt.xlim(0, 140)\nplt.ylim(-1, 1)\n\nplt.xlabel('i')\nplt.legend(['y1', 'y2', 'y3'])\n\n# 2.Frequencies f=63/128, 64/128, 65/128\ny63 = np.cos(2*np.pi*(63/128)*i)\ny64 = np.cos(2*np.pi*(64/128)*i)\ny65 = np.cos(2*np.pi*(65/128)*i)\nplt.subplot(3, 1, 2)\n\nplt.plot(i,y63,i,y64,i,y65)\n\nplt.xlim(0, 128)\nplt.ylim(-1, 1)\n\nplt.xlabel('i')\nplt.legend(['y63', 'y64', 'y65'])\n\n# 3.Expended graph\nj = np.arange(20, 50+1, 1)\ny63j = np.cos(2*np.pi*(63/128)*j)\ny64j = np.cos(2*np.pi*(64/128)*j)\ny65j = np.cos(2*np.pi*(65/128)*j)\nplt.subplot(3, 1, 3)\n\nplt.plot(j,y63j,j,y64j,j,y65j)\n\nplt.xlim(20, 50)\nplt.ylim(-1, 1)\n\nplt.xlabel('j')\nplt.legend(['y63j', 'y64j', 'y65j'])\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F13DTDISC2S\n% The cos-function show \"mirror\" symmetry around the\n% middle of the interval, at the beginning and at the end.\nfunction F13DTDISC2S;\n% Length interval is 1,2,3...\n% 1.Frequencies f = 1/128, 2/128, 3/128\ni = (0:1:127);\ny1 = cos(2*pi*(1/128)*i);\ny2 = cos(2*pi*(2/128)*i);\ny3 = cos(2*pi*(63/128)*i);\n\nfigure(1);\nsubplot(3,1,1);\nplot(i,y1,i,y2,i,y3);\naxis([0 140 -1 1]);\nxlabel('i');\nlegend('y1','y2','y3');\n\n% 2.Frequencies f=63/128, 64/128, 65/128\ny63 = cos(2*pi*(63/128)*i);\ny64 = cos(2*pi*(64/128)*i);\ny65 = cos(2*pi*(65/128)*i);\n\nsubplot(3,1,2);\nplot(i,y63,i,y64,i,y65);\naxis([0 128 -1 1]);\nxlabel('i');\nlegend('y63','y64','y65');\n\n% 3.Expended graph\nj = (20:1:50);\ny63j = cos(2*pi*(63/128)*j);\ny64j = cos(2*pi*(64/128)*j);\ny65j = cos(2*pi*(65/128)*j);\n\nsubplot(3,1,3);\nplot(j,y63j,j,y64j,j,y65j);\naxis([20 50 -1 1]);\nxlabel('j');\nlegend('y63j','y64j','y65j');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F13DTDISC2S",
    "tags": [
      "chapter9",
      "fourier-transform",
      "mirror",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Mirror",
        "url": "https://en.wikipedia.org/wiki/Mirror"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "F14MICHOPS",
    "title": "F14MICHOPS - F14MICHOPS\r",
    "description": "F14MICHOPS\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F14MICHOPS\n\n# Michelson interferometer. Beamsplitter is assumed to be ideal with 50-50\n# efficinecy.Fringe pattern on displacement of mirrors.\n\n# Amplitude and intensity pattern depending on displacement x of mirror.\n# The \"space coordinate\" is a sequence of discreate points, all having the same\n# distance.\n\n\n# 1. Cosine function, one frequency, amplitude.\n# The space coordinate runs from 0 to 127\ni = np.arange(0, 127+1, 1)\nkmax = 1; # we have k=1/128 as the frequency\n\nnx = length(i)\nfor ui=1:nx\n    sum = 0\n    for rk=1:kmax\n        sum = sum + np.cos(2*np.pi*(rk/128)*i(ui))\n    u1(ui) = sum\nfig = plt.figure(1)\n\nplt.subplot(4, 1, 1)\n\nplt.plot(i,u1)\n\nplt.xlim(0, 140)\nplt.ylim(-1, 1)\n\nplt.xlabel('i')\nplt.legend(['u1'])\n\n# We just go through one cycle\n\n# 2. Cosine function, one frequency, intensity.\nplt.subplot(4, 1, 2)\n\nplt.plot(i,(u1)\n**2)\nplt.xlim(0, 128)\nplt.ylim(-1, 1)\n\nplt.xlabel('i')\nplt.legend(['(u1)^2'])\n# 3. Cosine function, many frequencies, amplitude.\ni = np.arange(0, 127+1, 1)\nnx = length(i)\nkmax = 20\nfor u2i=1:nx\n    sum = 0\n    for rk=1:kmax\n        sum = sum + np.cos(2*np.pi*(rk/128)*i(u2i))\n    u2(u2i) = sum\n# k = 1/128, 2/128.. 20/128 are the frequencies,\n\nplt.subplot(4, 1, 3)\n\nplt.plot(i,u2)\n\nplt.xlim(0, 140)\nplt.ylim(-20, 20)\n\nplt.xlabel('i')\nplt.legend(['u2'])\n# 4. Cosine function, many frequencies, intensity.\n\n\nplt.subplot(4, 1, 4)\n\nplt.plot(i,(u2**2)\n)\nplt.xlim(0, 140)\nplt.ylim(0, 400)\n\nplt.xlabel('i')\nplt.legend(['(u2)^2'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F14MICHOPS\n\n% Michelson interferometer. Beamsplitter is assumed to be ideal with 50-50\n% efficinecy.Fringe pattern on displacement of mirrors.\n\n% Amplitude and intensity pattern depending on displacement x of mirror.\n% The \"space coordinate\" is a sequence of discreate points, all having the same\n% distance.\n\nfunction F14MICHOPS;\n% 1. Cosine function, one frequency, amplitude.\n% The space coordinate runs from 0 to 127\ni = (0:1:127);\nkmax = 1; % we have k=1/128 as the frequency\n\nnx = length(i);\nfor ui=1:nx\n    sum = 0;\n    for rk=1:kmax\n        sum = sum + cos(2*pi*(rk/128)*i(ui));            \n    end;\n    u1(ui) = sum;\nend;\n\n\nfigure(1);\nsubplot(4,1,1);\nplot(i,u1);\naxis([0 140 -1 1]);\nxlabel('i');\nlegend('u1');\n\n% We just go through one cycle\n\n% 2. Cosine function, one frequency, intensity.\nsubplot(4,1,2);\nplot(i,(u1).^2);\naxis([0 128 -1 1]);\nxlabel('i');\nlegend('(u1)^2');\n% 3. Cosine function, many frequencies, amplitude.\ni = (0:1:127);\nnx = length(i);\nkmax = 20;\nfor u2i=1:nx\n    sum = 0;\n    for rk=1:kmax\n        sum = sum + cos(2*pi*(rk/128)*i(u2i));            \n    end;\n    u2(u2i) = sum;\nend;\n% k = 1/128, 2/128.. 20/128 are the frequencies,\n\nsubplot(4,1,3);\nplot(i,u2);\naxis([0 140 -20 20]);\nxlabel('i');\nlegend('u2');\n% 4. Cosine function, many frequencies, intensity.\n\n\nsubplot(4,1,4);\nplot(i,(u2.^2));\naxis([0 140 0 400]);\nxlabel('i');\nlegend('(u2)^2');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F14MICHOPS",
    "tags": [
      "chapter9",
      "fourier-transform",
      "mirror",
      "intensity",
      "amplitude",
      "frequency",
      "fringe-pattern",
      "pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Mirror",
        "url": "https://en.wikipedia.org/wiki/Mirror"
      },
      {
        "title": "Intensity (physics)",
        "url": "https://en.wikipedia.org/wiki/Intensity_(physics)"
      },
      {
        "title": "Amplitude",
        "url": "https://en.wikipedia.org/wiki/Amplitude"
      },
      {
        "title": "Frequency",
        "url": "https://en.wikipedia.org/wiki/Frequency"
      },
      {
        "title": "Interference (wave propagation)",
        "url": "https://en.wikipedia.org/wiki/Interference_(wave_propagation)"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "F15FOLDS",
    "title": "F15FOLDS - F15FOLDS\r",
    "description": "F15FOLDS\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F15FOLDS\n# Folding of the spectrum.\n# For the sampling interval 1/255, highest frequency is 128,\n# the frequencies are at 65, 85, 105, all below 127.\n\n# a.Sample interval i/255\ni = np.arange(0, 255+1, 1)\ny1 = np.cos(2*np.pi*65*(i/255)) + np.cos(2*np.pi*85*(i/255)) + np.cos(2*np.pi*105*(i/255))\nfig = plt.figure(1)\n\nplt.subplot(3, 2, 1)\n\nplt.plot(i/255,y1)\n\nplt.xlim(0, 1)\nplt.ylim(-2, 4)\n\nplt.xlabel('i/255')\nplt.legend(['y1'])\n\nc = fft(y1)\nN = length(c) - 1\nj = (0:1:N)\nplt.subplot(3, 2, 2)\n\nplt.plot(j,real(c)\n/np.sqrt(N+1))\nplt.xlim(0, 140)\nplt.ylim(-5, 10)\n\nplt.xlabel('j')\nplt.legend(['real(c)/sqrt(N+1)'])\n# Frequency peaks are at 65 85 105\n\n# b.Sample interval 2i/255\n\n# For the sampling interval 2/255, highest frequency is 64, the original frequencies are at\n# 65, 85, 105, all larger than 64 and appear folded.\n\ny2 = np.cos(2*np.pi*65*((2*i)/255))+np.cos(2*np.pi*85*((2*i)/255)) + np.cos(2*np.pi*105*((2*i)/255))\nplt.subplot(3, 2, 3)\n\nplt.plot(2*(i/255)\n,y2)\nplt.xlim(0, 2)\nplt.ylim(-2, 4)\n\nplt.xlabel('2*(i/255)')\nplt.legend(['y2'])\n\ncc = fft(y2)\nN = length(cc) - 1\nj = (0:1:N)\nplt.subplot(3, 2, 4)\n\nplt.plot(j,real(cc)\n/np.sqrt(N+1))\nplt.xlim(0, 140)\nplt.ylim(-5, 10)\n\nplt.xlabel('j')\nplt.legend(['real(cc)/sqrt(N+1)'])\n# Frequency peaks appear 65 at--> 125\n# 85 at--> 85\n# 105 at--> 45\n\n# c. Sample interval 4i/255\n# For the sampling interval 4/255, highest frequency 32, the frequencies are\n# higher than 1 times 32 and 2 times 32.\n\ny4 = np.cos(2*np.pi*65*((4*i)/255)) + np.cos(2*np.pi*85*((4*i)/255)) + np.cos(2*np.pi*105*((4*i)/255))\nplt.subplot(3, 2, 5)\n\nplt.plot(4*(i/255)\n, y4)\nplt.xlim(0, 4)\nplt.ylim(-2, 4)\n\nplt.xlabel('4*(i/255)')\nplt.legend(['y4'])\n\nccc = fft(y4)\nN = length(ccc)-1\nj = (0:1:N)\nplt.subplot(3, 2, 6)\n\nplt.plot(j,real(ccc)\n/np.sqrt(N+1))\nplt.xlim(0, 140)\nplt.ylim(-5, 10)\n\nplt.xlabel('j')\nplt.legend(['real(ccc)/sqrt(N+1)'])\n# Frequency peaks appear 65 at--> 5\n# 85 at--> 85\n# 105 at--> 90\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F15FOLDS\n% Folding of the spectrum.\n% For the sampling interval 1/255, highest frequency is 128,\n% the frequencies are at 65, 85, 105, all below 127.\nfunction F15FOLDS;\n% a.Sample interval i/255\ni = (0:1:255);\ny1 = cos(2*pi*65*(i/255)) + cos(2*pi*85*(i/255)) + cos(2*pi*105*(i/255));\n\nfigure(1);\nsubplot(3,2,1);\nplot(i/255,y1);\naxis([0 1 -2 4]);\nxlabel('i/255');\nlegend('y1');\n\nc = fft(y1);\nN = length(c) - 1;\nj = (0:1:N);\n\nsubplot(3,2,2);\nplot(j,real(c)/sqrt(N+1));\naxis([0 140 -5 10]);\nxlabel('j');\nlegend('real(c)/sqrt(N+1)');\n% Frequency peaks are at 65 85 105\n\n% b.Sample interval 2i/255\n\n% For the sampling interval 2/255, highest frequency is 64, the original frequencies are at\n% 65, 85, 105, all larger than 64 and appear folded.\n\ny2 = cos(2*pi*65*((2*i)/255))+cos(2*pi*85*((2*i)/255)) + cos(2*pi*105*((2*i)/255));\n\nsubplot(3,2,3);\nplot(2*(i/255),y2);\naxis([0 2 -2 4]);\nxlabel('2*(i/255)');\nlegend('y2');\n\ncc = fft(y2);\nN = length(cc) - 1;\nj = (0:1:N);\n\n\nsubplot(3,2,4);\nplot(j,real(cc)/sqrt(N+1));\naxis([0 140 -5 10]);\nxlabel('j');\nlegend('real(cc)/sqrt(N+1)');\n% Frequency peaks appear 65 at--> 125\n%                        85 at--> 85\n%                       105 at--> 45\n\n% c. Sample interval 4i/255\n% For the sampling interval 4/255, highest frequency 32, the frequencies are\n% higher than 1 times 32 and 2 times 32.\n\ny4 = cos(2*pi*65*((4*i)/255)) + cos(2*pi*85*((4*i)/255)) + cos(2*pi*105*((4*i)/255));\n\nsubplot(3,2,5);\nplot(4*(i/255), y4);\naxis([0 4 -2 4]);\nxlabel('4*(i/255)');\nlegend('y4');\n\nccc = fft(y4);\nN = length(ccc)-1;\nj = (0:1:N);\n\nsubplot(3,2,6);\nplot(j,real(ccc)/sqrt(N+1));\naxis([0 140 -5 10]);\nxlabel('j');\nlegend('real(ccc)/sqrt(N+1)');\n\n% Frequency peaks appear 65 at--> 5\n%                        85 at--> 85\n%                       105 at--> 90\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F15FOLDS",
    "tags": [
      "chapter9",
      "fourier-transform",
      "frequency",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Frequency",
        "url": "https://en.wikipedia.org/wiki/Frequency"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "and",
    "title": "and - F16APODIS\r",
    "description": "F16APODIS\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F16APODIS\n# Fourier transformation of sine-function and Appodisation\n\n\n# 1.Original function\nf = 31\nk = np.arange(0, 255+1, 1)\ny = np.cos(2*np.pi*f*(k/255))\nfig = plt.figure(1)\n\nplt.subplot(3, 2, 1)\n\nplt.plot(k/255,y)\n\nplt.xlim(0, 1)\nplt.ylim(-1, 1)\n\nplt.xlabel('k/255')\nplt.legend(['y'])\n\n# 2.Step function\nd = 255\ni = np.arange(0, 400+1, 1)\np = ((logical(i)>=0) - (logical(i-d)>=0))\nplt.subplot(3, 2, 2)\n\nplt.plot(i/255,real(p)\n,i/255,imag(p))\nplt.xlim(0, 2)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i/255')\nplt.legend(['real(p)', 'imag(p)'])\nyp = np.cos(2*np.pi*f*(i/255))*p\nplt.subplot(3, 2, 3)\n\nplt.plot(i/255,yp)\n\nplt.xlim(0, 1.6)\nplt.ylim(-1, 1)\n\nplt.xlabel('i/255')\nplt.legend(['yp'])\n\n# 3.Fourier transformation of y times p, we have to use 255 points\nk = np.arange(0, 255+1, 1)\nx = np.cos(2*np.pi*f*(k/255))*((logical(k)>=0) - (logical(k-d)>=0))\nc = fft(x)\nN = length(c) - 1\nj =(0:1:N)\nplt.subplot(3, 2, 4)\n\nplt.plot(j,real(c)\n/np.sqrt(N+1))\nplt.xlim(-5, 140)\nplt.ylim(-2, 8)\n\nplt.xlabel('j')\nplt.legend(['real(c)/sqrt(N+1)'])\n# 4.Triangle function\nq = 1-k/255\nay = q*y\nplt.subplot(3, 2, 5)\n\nplt.plot(k/255,ay)\n\nplt.xlim(0, 1)\nplt.ylim(-1, 1)\n\nplt.xlabel('k/255')\nplt.legend(['ay'])\n\n# 5.Fourier transformation of y times p, we have to use 255 points\n\nc = fft(ay)\nN = length(c) - 1\nj = (0:1:N)\nplt.subplot(3, 2, 6)\n\nplt.plot(j, real(c)\n/np.sqrt(N+1))\nplt.xlim(0, 140)\nplt.ylim(-2, 8)\n\nplt.xlabel('j')\nplt.legend(['real(c)/sqrt(N+1)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F16APODIS\n% Fourier transformation of sine-function and Appodisation\n\nfunction F16APODIS;\n% 1.Original function\nf = 31;\nk = (0:1:255);\ny = cos(2*pi*f*(k/255));\n\nfigure(1);\nsubplot(3,2,1);\nplot(k/255,y);\naxis([0 1 -1 1]);\nxlabel('k/255');\nlegend('y');\n\n% 2.Step function\nd = 255;\ni = (0:1:400);\np = ((logical(i)>=0) - (logical(i-d)>=0));\n\nsubplot(3,2,2);\nplot(i/255,real(p),i/255,imag(p));\naxis([0 2 -0.5 1.5]);\nxlabel('i/255');\nlegend('real(p)','imag(p)');\n\nyp = cos(2*pi*f*(i/255)).*p;\n\nsubplot(3,2,3);\nplot(i/255,yp);\naxis([0 1.6 -1 1]);\nxlabel('i/255');\nlegend('yp');\n\n% 3.Fourier transformation of y times p, we have to use 255 points\nk = (0:1:255);\nx = cos(2*pi*f*(k/255)).*((logical(k)>=0) - (logical(k-d)>=0));\nc = fft(x);\nN = length(c) - 1;\nj =(0:1:N);\n\n\n\nsubplot(3,2,4);\nplot(j,real(c)/sqrt(N+1));\naxis([-5 140 -2 8]);\nxlabel('j');\nlegend('real(c)/sqrt(N+1)');\n\n% 4.Triangle function\nq = 1-k/255;\nay = q.*y;\n\nsubplot(3,2,5);\nplot(k/255,ay);\naxis([0 1 -1 1]);\nxlabel('k/255');\nlegend('ay');\n\n% 5.Fourier transformation of y times p, we have to use 255 points\n\nc = fft(ay);\nN = length(c) - 1;\nj = (0:1:N);\n\nsubplot(3,2,6);\nplot(j, real(c)/sqrt(N+1));\naxis([0 140 -2 8]);\nxlabel('j');\nlegend('real(c)/sqrt(N+1)');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F16APODIS",
    "tags": [
      "chapter9",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - F1FTSTEPS\r",
    "description": "F1FTSTEPS\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F1FTSTEPS\n# The real FT is used.\n# Fourier transform of a SINGLE SIDED step function of width 0 to d.\n\n\ni = np.arange(0, 255+1, 1)\nd = 20\nnx = length(i)\nx = (logical(i)>=0) - (logical(i-d)>=0)\n\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(i/255,real(x)\n,i/255,imag(x))\nplt.xlim(0, 1)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i/255')\nplt.legend(['real(x)', 'imag(x)'])\n# Fourier transform\nc = fft(x)\n# N = 128\nN = length(c)-1\nj = (0:1:N)\nplt.subplot(3, 1, 2)\n\nplt.plot(j/255,real(c)\n/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))\nplt.xlim(0, 0.6)\nplt.ylim(-1, 2)\n\nplt.xlabel('j/255')\nplt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])\n# The first zero of the FT\n# is at 1/2d\n\n# Fourier transform - inverse of Fourier transform\ny = ifft(c)\nN = length(c)-1\nj = (0:1:N)\n# 1/(2*d)=0.025\n\nplt.subplot(3, 1, 3)\n\nplt.plot(j/255,real(y)\n,j/255,imag(y))\nplt.xlim(0, 0.6)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('j/255')\nplt.legend(['real(y)', 'imag(y)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F1FTSTEPS\n% The real FT is used.\n% Fourier transform of a SINGLE SIDED step function of width 0 to d.\n\nfunction F1FTSTEPS;\ni = (0:1:255);\nd = 20;\nnx = length(i);\nx = (logical(i)>=0) - (logical(i-d)>=0)\n\nfigure(1);\nsubplot(3,1,1);\nplot(i/255,real(x),i/255,imag(x));\naxis([0 1 -0.5 1.5]);\nxlabel('i/255');\nlegend('real(x)','imag(x)');\n\n%Fourier transform\nc = fft(x);\n%N = 128\nN = length(c)-1;\nj = (0:1:N);\n\nsubplot(3,1,2);\nplot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));\naxis([0 0.6 -1 2]);\nxlabel('j/255');\nlegend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');\n\n% The first zero of the FT\n% is at 1/2d\n\n%Fourier transform - inverse of Fourier transform\ny = ifft(c);\nN = length(c)-1;\nj = (0:1:N);\n\n% 1/(2*d)=0.025\n\nsubplot(3,1,3);\nplot(j/255,real(y),j/255,imag(y));\naxis([0 0.6 -0.5 1.5]);\nxlabel('j/255');\nlegend('real(y)','imag(y)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F1FTSTEPS",
    "tags": [
      "chapter9",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - F2FTSTEPDS\r",
    "description": "F2FTSTEPDS\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F2FTSTEPDS\n# The real FT is used.\n# Fourier transform of DOUBLE SIDED step function of width 0 to d.\n\n\n# Original Function\ni = np.arange(0, 255+1, 1)\nd = 20\nnx = length(i)\nx = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0)\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(i/255,real(x)\n,i/255,imag(x))\nplt.xlim(0, 1)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i/255')\nplt.legend(['real(x)', 'imag(x)'])\n# Fourier transform\nc = fft(x)\n# N = 128\nN = length(c)-1\nj = (0:1:N)\nplt.subplot(3, 1, 2)\n\nplt.plot(j/255,real(c)\n/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))\nplt.xlim(0, 0.6)\nplt.ylim(-2, 4)\n\nplt.xlabel('j/255')\nplt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])\n# The first zero of the FT\n# is at 1/2d\n\n# Fourier transform(inverse) of Fourier transform\nz = ifft(c)\nN = length(c)-1\nk = (0:1:N)\n# 1/(2*d)=0.025\n\nplt.subplot(3, 1, 3)\n\nplt.plot(i,real(z)\n,i,imag(z))\nplt.xlim(0, 300)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i')\nplt.legend(['real(z)', 'imag(z)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F2FTSTEPDS\n% The real FT is used.\n% Fourier transform of DOUBLE SIDED step function of width 0 to d.\n\nfunction F2FTSTEPDS;\n% Original Function\ni = (0:1:255);\nd = 20;\nnx = length(i);\nx = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0);\n\nfigure(1);\nsubplot(3,1,1);\nplot(i/255,real(x),i/255,imag(x));\naxis([0 1 -0.5 1.5]);\nxlabel('i/255');\nlegend('real(x)','imag(x)');\n\n%Fourier transform\nc = fft(x);\n%N = 128\nN = length(c)-1;\nj = (0:1:N);\n\nsubplot(3,1,2);\nplot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));\naxis([0 0.6 -2 4]);\nxlabel('j/255');\nlegend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');\n\n\n% The first zero of the FT\n% is at 1/2d\n\n%Fourier transform(inverse) of Fourier transform\nz = ifft(c);\nN = length(c)-1;\nk = (0:1:N);\n\n% 1/(2*d)=0.025\n\nsubplot(3,1,3);\nplot(i,real(z),i,imag(z));\naxis([0 300 -0.5 1.5]);\nxlabel('i');\nlegend('real(z)','imag(z)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F2FTSTEPDS",
    "tags": [
      "chapter9",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - F2FTSTEPDS\r",
    "description": "F2FTSTEPDS\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F2FTSTEPDS\n# The complex FT is used.\n# Fourier transform of SINGLE SIDED step function of width 0 to d.\n\n\n# Original Function\ni = np.arange(0, 255+1, 1)\nd = 20\nnx = length(i)\nx = (logical(i)>=0) - (logical(i-d)>=0)\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(i,real(x)\n,i,imag(x))\nplt.xlim(0, 300)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i')\nplt.legend(['real(x)', 'imag(x)'])\n# Fourier transform\nc = fft(x)\n# N = 128\nN = length(c)-1\nj = (0:1:N)\nplt.subplot(3, 1, 2)\n\nplt.plot(j/255,real(c)\n/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))\nplt.xlim(0, 1)\nplt.ylim(-1, 2)\n\nplt.xlabel('j/255')\nplt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])\n# The first zero of the FT\n# is at 1/2d\n\n# Fourier transform(inverse) of Fourier transform\nz = ifft(c)\nN = length(c)-1\nk = (0:1:N)\n# 1/(2*d)=0.025\n\nplt.subplot(3, 1, 3)\n\nplt.plot(i,real(z)\n,i,imag(z))\nplt.xlim(0, 300)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i')\nplt.legend(['real(z)', 'imag(z)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F2FTSTEPDS\n% The complex FT is used.\n% Fourier transform of SINGLE SIDED step function of width 0 to d.\n\nfunction F3DTSTEPC1S;\n% Original Function\ni = (0:1:255);\nd = 20;\nnx = length(i);\nx = (logical(i)>=0) - (logical(i-d)>=0);\n\nfigure(1);\nsubplot(3,1,1);\nplot(i,real(x),i,imag(x));\naxis([0 300 -0.5 1.5]);\nxlabel('i');\nlegend('real(x)','imag(x)');\n\n%Fourier transform\nc = fft(x);\n%N = 128\nN = length(c)-1;\nj = (0:1:N);\n\nsubplot(3,1,2);\nplot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));\naxis([0 1 -1 2]);\nxlabel('j/255');\nlegend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');\n\n% The first zero of the FT\n% is at 1/2d\n\n%Fourier transform(inverse) of Fourier transform\nz = ifft(c);\nN = length(c)-1;\nk = (0:1:N);\n\n% 1/(2*d)=0.025\n\nsubplot(3,1,3);\nplot(i,real(z),i,imag(z));\naxis([0 300 -0.5 1.5]);\nxlabel('i');\nlegend('real(z)','imag(z)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F2FTSTEPDS",
    "tags": [
      "chapter9",
      "fourier-transform",
      "3d-visualization",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - F4FTSTEPOSS\r",
    "description": "F4FTSTEPOSS\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F4FTSTEPOSS\n# The complex FT is used.\n# Fourier transform of DOUBLE SIDED step function of width 0 to d.\n\n\n# Original Function\ni = np.arange(0, 255+1, 1)\nd = 20\nnx = length(i)\nx = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0)\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(i,real(x)\n,i,imag(x))\nplt.xlim(0, 300)\nplt.ylim(-0.5, 1.5)\n\nplt.legend(['real(x)', 'imag(x)'])\nplt.xlabel('i')\n# Fourier transform\nc = fft(x)\n# N = 128\nN = length(c)-1\nj = (0:1:N)\nplt.subplot(3, 1, 2)\n\nplt.plot(j/255,real(c)\n/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))\nplt.xlim(0, 1)\nplt.ylim(-2, 4)\n\nplt.xlabel('j/255')\nplt.legend(['real(c)/sqrt(N+1)', '-imag(z)/sqrt(N+1)'])\n# The first zero of the FT\n# is at 1/2d\n\n# Fourier transform(inverse) of Fourier transform\nz = ifft(c)\nN = length(c)-1\nk = (0:1:N)\n# 1/(2*d)=0.025\n\nplt.subplot(3, 1, 3)\n\nplt.plot(i,real(z)\n,i,imag(z))\nplt.xlim(0, 300)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i')\nplt.legend(['real(z)', 'imag(z)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F4FTSTEPOSS\n% The complex FT is used.\n% Fourier transform of DOUBLE SIDED step function of width 0 to d.\n\nfunction F4FTSTEPOSS;\n% Original Function\ni = (0:1:255);\nd = 20;\nnx = length(i);\nx = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0);\n\nfigure(1);\nsubplot(3,1,1);\nplot(i,real(x),i,imag(x));\naxis([0 300 -0.5 1.5]);\nlegend('real(x)','imag(x)');\nxlabel('i');\n\n%Fourier transform\nc = fft(x);\n%N = 128\nN = length(c)-1;\nj = (0:1:N);\n\nsubplot(3,1,2);\nplot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));\naxis([0 1 -2 4]);\nxlabel('j/255');\nlegend('real(c)/sqrt(N+1)','-imag(z)/sqrt(N+1)');\n\n% The first zero of the FT\n% is at 1/2d\n\n%Fourier transform(inverse) of Fourier transform\nz = ifft(c);\nN = length(c)-1;\nk = (0:1:N);\n\n% 1/(2*d)=0.025\n\nsubplot(3,1,3);\nplot(i,real(z),i,imag(z));\naxis([0 300 -0.5 1.5]);\nxlabel('i');\nlegend('real(z)','imag(z)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F4FTSTEPOSS",
    "tags": [
      "chapter9",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - F5FTSINCRS\r",
    "description": "F5FTSINCRS\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F5FTSINCRS\n# The real FT is used.\n# Fourier transform of sinz/z function of width 0 to d\n\n\n# Original Function\ni = np.arange(0, 255+1, 1)\nd = 40\nx = np.sin(2*np.pi*d*(i/255))/(2*np.pi*d*(i/255))\nx(1) = 0\nnx = length(i)\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(i,real(x)\n,i,imag(x))\nplt.xlim(0, 300)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i')\nplt.legend(['real(x)', 'imag(x)'])\n# Fourier transform\nc = fft(x)\n# N = 128\nN = length(c)-1\nj = (0:1:N)\nplt.subplot(3, 1, 2)\n\nplt.plot(j/255,real(c)\n/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))\nplt.xlim(0, 0.6)\nplt.ylim(-0.1, 0.3)\n\nplt.xlabel('j/255')\nplt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])\n# The first zero of the FT\n# is at 1/2d\n\n# Fourier transform(inverse) of Fourier transform\nz = ifft(c)\nN = length(c)-1\nk = (0:1:N)\n# 1/(2*d)=0.013\n\nplt.subplot(3, 1, 3)\n\nplt.plot(i,real(z)\n,i,imag(z))\nplt.xlim(0, 300)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i')\nplt.legend(['real(z)', 'imag(z)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F5FTSINCRS\n% The real FT is used.\n% Fourier transform of sinz/z function of width 0 to d\n\nfunction F5FTSINCRS;\n% Original Function\ni = (0:1:255);\nd = 40;\nx = sin(2*pi*d*(i/255))./(2*pi*d*(i/255));\nx(1) = 0;\nnx = length(i);\n\n\nfigure(1);\nsubplot(3,1,1);\nplot(i,real(x),i,imag(x));\naxis([0 300 -0.5 1.5]);\nxlabel('i');\nlegend('real(x)','imag(x)');\n\n%Fourier transform\nc = fft(x);\n%N = 128\nN = length(c)-1;\nj = (0:1:N);\n\nsubplot(3,1,2);\nplot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));\naxis([0 0.6 -0.1 0.3]);\nxlabel('j/255');\nlegend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');\n\n% The first zero of the FT\n% is at 1/2d\n\n%Fourier transform(inverse) of Fourier transform\nz = ifft(c);\nN = length(c)-1;\nk = (0:1:N);\n\n% 1/(2*d)=0.013\n\nsubplot(3,1,3);\nplot(i,real(z),i,imag(z));\naxis([0 300 -0.5 1.5]);\nxlabel('i');\nlegend('real(z)','imag(z)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F5FTSINCRS",
    "tags": [
      "chapter9",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - F6FTSINCCS\r",
    "description": "F6FTSINCCS\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F6FTSINCCS\n# The complex FT is used.\n# Fourier transform of sinz/z function of width 0 to d\n\n\n# Original Function\ni = np.arange(0, 255+1, 1)\nd = 20\nx = np.sin(2*np.pi*d*(i/255))/(2*np.pi*d*(i/255))\nx(1) = 0\nnx = length(i)\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(i/255,real(x)\n,i/255,imag(x))\nplt.xlim(0, 1)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i/255')\nplt.legend(['real(x)', 'imag(x)'])\n# Fourier transform\nc = fft(x)\n# N = 128\nN = length(c)-1\nj = (0:1:N)\nplt.subplot(3, 1, 2)\n\nplt.plot(j/255,real(c)\n/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))\nplt.xlim(0, 1)\nplt.ylim(-0.5, 0.5)\n\nplt.xlabel('j/255')\nplt.legend(['real(c)/sqrt(N+1)', '-imag(z)/sqrt(N+1)'])\n# The first zero of the FT\n# is at 1/2d\n\n# Fourier transform(inverse) of Fourier transform\nz = ifft(c)\nN = length(c)-1\nk = (0:1:N)\n# 1/(2*d)=0.025\n\nplt.subplot(3, 1, 3)\n\nplt.plot(i,real(z)\n,i,imag(z))\nplt.xlim(0, 300)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i')\nplt.legend(['real(z)', 'imag(z)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F6FTSINCCS\n% The complex FT is used.\n% Fourier transform of sinz/z function of width 0 to d\n\nfunction F6FTSINCCS;\n% Original Function\ni = (0:1:255);\nd = 20;\nx = sin(2*pi*d*(i/255))./(2*pi*d*(i/255));\nx(1) = 0;\nnx = length(i);\n\n\nfigure(1);\nsubplot(3,1,1);\nplot(i/255,real(x),i/255,imag(x));\naxis([0 1 -0.5 1.5]);\nxlabel('i/255');\nlegend('real(x)','imag(x)');\n\n%Fourier transform\nc = fft(x);\n%N = 128\nN = length(c)-1;\nj = (0:1:N);\n\nsubplot(3,1,2);\nplot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));\naxis([0 1 -0.5 0.5]);\nxlabel('j/255');\nlegend('real(c)/sqrt(N+1)','-imag(z)/sqrt(N+1)');\n\n% The first zero of the FT\n% is at 1/2d\n\n%Fourier transform(inverse) of Fourier transform\nz = ifft(c);\nN = length(c)-1;\nk = (0:1:N);\n\n% 1/(2*d)=0.025\n\nsubplot(3,1,3);\nplot(i,real(z),i,imag(z));\naxis([0 300 -0.5 1.5]);\nxlabel('i');\nlegend('real(z)','imag(z)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F6FTSINCCS",
    "tags": [
      "chapter9",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - F7FTSTEP183S\r",
    "description": "F7FTSTEP183S\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F7FTSTEP183S\n# Complex Fourier transform of step function of width 0 to d.\n# 183 points are used. The FT(inverse) of the FT is also shown.\n\n\n# Original Function\ni = np.arange(0, 183+1, 1)\nd = 20\nx = (logical(i)>=0) - (logical(i-d)>=0)\nnx = length(i)\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(i,real(x)\n,i,imag(x))\nplt.xlim(0, 200)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i')\nplt.legend(['real(x)', 'imag(x)'])\n# Fourier transform\nc = fft(x)\n# N = 128\nN = length(c)-1\nj = (0:1:N)\nplt.subplot(3, 1, 2)\n\nplt.plot(j,real(c)\n/np.sqrt(N+1),j,-imag(c)/np.sqrt(N+1))\nplt.xlim(0, 200)\nplt.ylim(-2, 2)\n\nplt.xlabel('j')\nplt.legend(['real(c)/sqrt(N+1)', '-imag(z)/sqrt(N+1)'])\n# The first zero of the FT\n# is at 1/2d\n\n# Fourier transform(inverse) of Fourier transform\nz = ifft(c)\nN = length(c)-1\nk = (0:1:N)\n# 1/(2*d)=0.025\n\nplt.subplot(3, 1, 3)\n\nplt.plot(i,real(z)\n,i,imag(z))\nplt.xlim(0, 200)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i')\nplt.legend(['real(z)', 'imag(z)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F7FTSTEP183S\n% Complex Fourier transform of step function of width 0 to d.\n% 183 points are used. The FT(inverse) of the FT is also shown.\n\nfunction F7FTSTEP183S;\n% Original Function\ni = (0:1:183);\nd = 20;\nx = (logical(i)>=0) - (logical(i-d)>=0)\nnx = length(i);\n\n\nfigure(1);\nsubplot(3,1,1);\nplot(i,real(x),i,imag(x));\naxis([0 200 -0.5 1.5]);\nxlabel('i');\nlegend('real(x)','imag(x)');\n\n%Fourier transform\nc = fft(x);\n%N = 128\nN = length(c)-1;\nj = (0:1:N);\n\nsubplot(3,1,2);\nplot(j,real(c)/sqrt(N+1),j,-imag(c)/sqrt(N+1));\naxis([0 200 -2 2]);\nxlabel('j');\nlegend('real(c)/sqrt(N+1)','-imag(z)/sqrt(N+1)');\n% The first zero of the FT\n% is at 1/2d\n\n%Fourier transform(inverse) of Fourier transform\nz = ifft(c);\nN = length(c)-1;\nk = (0:1:N);\n\n% 1/(2*d)=0.025\n\nsubplot(3,1,3);\nplot(i,real(z),i,imag(z));\naxis([0 200 -0.5 1.5]);\nxlabel('i');\nlegend('real(z)','imag(z)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F7FTSTEP183S",
    "tags": [
      "chapter9",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - F8FTSINC183S\r",
    "description": "F8FTSINC183S\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F8FTSINC183S\n# Fourier transform of sinz/z function of width 0 to d\n# The FT (inverse) of the FT is also shown\n\n\n# Original Function\ni = np.arange(0, 183+1, 1)\nd = 20\nx = np.sin(2*np.pi*d*(i/255))/(2*np.pi*d*(i/255))\nx(1) = 0\nnx = length(i)\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(i/255,real(x)\n,i/255,imag(x))\nplt.xlim(0, 0.8)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i/255')\nplt.legend(['real(x)', 'imag(x)'])\n# Fourier transform\nc = fft(x)\n# N = 183\nN = length(c)-1\nj = (0:1:N)\nplt.subplot(3, 1, 2)\n\nplt.plot(j/255,real(c)\n/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))\nplt.xlim(0, 0.8)\nplt.ylim(-0.5, 0.5)\n\nplt.xlabel('j/255')\nplt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])\n# The first zero of the FT\n# is at 1/2d\n\n# Fourier transform(inverse) of Fourier transform\nz = ifft(c)\nN = length(c)-1\nk = (0:1:N)\n# 1/(2*d)=0.025\n\nplt.subplot(3, 1, 3)\n\nplt.plot(i,real(z)\n,i,imag(z))\nplt.xlim(0, 200)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i')\nplt.legend(['real(z)', 'imag(z)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F8FTSINC183S\n% Fourier transform of sinz/z function of width 0 to d\n% The FT (inverse) of the FT is also shown\n\nfunction F8FTSINC183S;\n% Original Function\ni = (0:1:183);\nd = 20;\nx = sin(2*pi*d*(i/255))./(2*pi*d*(i/255));\nx(1) = 0;\nnx = length(i);\n\n\nfigure(1);\nsubplot(3,1,1);\nplot(i/255,real(x),i/255,imag(x));\naxis([0 0.8 -0.5 1.5]);\nxlabel('i/255');\nlegend('real(x)','imag(x)');\n\n%Fourier transform\nc = fft(x);\n%N = 183\nN = length(c)-1;\nj = (0:1:N);\n\nsubplot(3,1,2);\nplot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));\naxis([0 0.8 -0.5 0.5]);\nxlabel('j/255');\nlegend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');\n\n% The first zero of the FT\n% is at 1/2d\n\n%Fourier transform(inverse) of Fourier transform\nz = ifft(c);\nN = length(c)-1;\nk = (0:1:N);\n\n% 1/(2*d)=0.025\n\nsubplot(3,1,3);\nplot(i,real(z),i,imag(z));\naxis([0 200 -0.5 1.5]);\nxlabel('i');\nlegend('real(z)','imag(z)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F8FTSINC183S",
    "tags": [
      "chapter9",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  },
  {
    "id": "for",
    "title": "for - F9FTGAUSS\r",
    "description": "F9FTGAUSS\r",
    "category": "Optics - Fourier Transform",
    "chapter": "9",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# F9FTGAUSS\n# Complex Fourier transformation of Gauss function for two values of a\n# and for Fast Fourier Transformation.\n# The maximum is at i = 0. The FT (inverse) of the FT is also calculated.\n\ni = np.arange(0, 255+1, 1)\nA = 1\na = 100\naa = 50\ny1 = A*np.exp(-a*((i/255)**2))\ny2 = A*np.exp(-aa*((i/255)**2))\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(i/255,y1,i/255,y2)\n\nplt.xlim(0, 1)\nplt.ylim(0, 1)\n\nplt.xlabel('i/255')\nplt.legend(['y1', 'y2'])\n\nc1 = fft(y1)\nc2 = fft(y2)\nN = length(c2)-1; # N=255\nj=(0:1:N)\nplt.subplot(3, 1, 2)\n\nplt.plot(j,real(c1)\n/np.sqrt(N+1),j,real(c2)/np.sqrt(N+1))\nplt.xlim(0, 300)\nplt.ylim(0, 3)\n\nplt.xlabel('j')\nplt.legend(['real(c1)/sqrt(N+1)', 'real(c2)/sqrt(N+1)'])\nzf1 = ifft(c1)\nzf2 = ifft(c2)\nN2 = length(zf2)-1\ni = (0:1:N2)\n# 1/(2*d)=0.025\n\nplt.subplot(3, 1, 3)\n\nplt.plot(i/255,zf1,i/255,zf2)\n\nplt.xlim(0, 0.4)\nplt.ylim(0, 1)\n\nplt.xlabel('i/255')\nplt.legend(['zf1', 'zf2'])\n# The coordinate is again i/255\n\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% F9FTGAUSS\n% Complex Fourier transformation of Gauss function for two values of a\n% and for Fast Fourier Transformation.\n% The maximum is at i = 0. The FT (inverse) of the FT is also calculated.\nfunction F9FTGAUSS;\ni = (0:1:255);\nA = 1;\na = 100;\naa = 50;\ny1 = A*exp(-a*((i/255).^2));\ny2 = A*exp(-aa*((i/255).^2));\n\nfigure(1);\nsubplot(3,1,1);\nplot(i/255,y1,i/255,y2);\naxis([0 1 0 1]);\nxlabel('i/255');\nlegend('y1','y2');\n\nc1 = fft(y1);\nc2 = fft(y2);\nN = length(c2)-1; % N=255\nj=(0:1:N);\n\nsubplot(3,1,2);\nplot(j,real(c1)/sqrt(N+1),j,real(c2)/sqrt(N+1));\naxis([0 300 0 3]);\nxlabel('j');\nlegend('real(c1)/sqrt(N+1)','real(c2)/sqrt(N+1)');\n\nzf1 = ifft(c1);\nzf2 = ifft(c2);\n\n\nN2 = length(zf2)-1;\ni = (0:1:N2);\n% 1/(2*d)=0.025\n\nsubplot(3,1,3);\nplot(i/255,zf1,i/255,zf2);\naxis([0 0.4 0 1]);\nxlabel('i/255');\nlegend('zf1','zf2');\n% The coordinate is again i/255\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "F9FTGAUSS",
    "tags": [
      "chapter9",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Fourier optics",
        "url": "https://en.wikipedia.org/wiki/Fourier_optics"
      }
    ]
  }
];
