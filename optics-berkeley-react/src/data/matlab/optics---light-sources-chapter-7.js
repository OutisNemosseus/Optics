// Optics - Light Sources - Chapter 7
// 10 programs

export const programs = [
  {
    "id": "L10WRS",
    "title": "L10WRS - L10WRS Radius of curvature and Beam waist.\r",
    "description": "L10WRS Radius of curvature and Beam waist.\r",
    "category": "Optics - Light Sources",
    "chapter": "7",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# L10WRS Radius of curvature and Beam waist.\n# 1. Radius of curvature\n# Beam waist normalized to 1 , that is we plot (w(z) =w0 SQR( 1 + (z/zR)**2) and set\n# w0 =.1, in cm. and zR = ?(?0)2 /? ? .01?/?, ? in cm.\n# Radius of curvature R(z) = z + (zR)**2/z\n\n\nzR = 100\nz = np.arange(-100, 100+0.01, 0.01)\nR = np.abs(z+((zR)**2)/z)\nRm = 2*zR\n# At z = 1/2 of distance of mirrors, that is\n# for for distance 200 at 100,\n# the radius of curvature must be\n# equal to the distance of the mirrors.\n\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(z,R)\n\nplt.xlim(-100, 100)\nplt.ylim(0, 1000)\n;                  # PLOTS LIMITS                    \nplt.xlabel('z')\nplt.legend(['R(z)'])\n# 2. Beam waist\n# Plots of two branches of the beam waist and the Asymptote to w(z), that is y = z/zR\n# If z is in cm, we have set for w0=.1, ?=3.14*.01/zR in cm ( about 3 microns for zR =100)\n\ny = (z*0.1)/zR; # and for the asymptote\nyy = -y\nw = 0.1*np.sqrt(1+(z/zR)**2); # and for the asymptote\nww = -0.1*np.sqrt(1+(z/zR)**2)\nplt.subplot(2, 1, 2)\n\nplt.plot(z,w,z,ww,z,y,z,yy)\n\nplt.xlim(-100, 100)\nplt.ylim(-0.2, 0.3)\n;                  # PLOTS LIMITS                    \nplt.xlabel('z')\nplt.legend(['w(z)', 'ww(z)', 'y(z)', 'yy(z)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% L10WRS Radius of curvature and Beam waist.\n% 1. Radius of curvature\n% Beam waist normalized to 1 , that is we plot (w(z) =w0 SQR( 1 + (z/zR)^2) and set\n% w0 =.1, in cm. and zR = ?(?0)2 /? ? .01?/?, ? in cm.\n% Radius of curvature R(z) = z + (zR)^2/z\n\nfunction L10WRS;\n\nzR = 100;\nz = (-100:0.01:100);\nR = abs(z+((zR)^2)./z);\nRm = 2*zR;\n\n% At z = 1/2 of distance of mirrors, that is\n% for for distance 200 at 100,\n% the radius of curvature must be\n% equal to the distance of the mirrors.\n\nfigure(1);\nsubplot(2,1,1);\nplot(z,R);\naxis([-100 100 0 1000]);                  % PLOTS LIMITS                    \nxlabel('z');\nlegend('R(z)');\n\n% 2. Beam waist\n% Plots of two branches of the beam waist and the Asymptote to w(z), that is y = z/zR\n% If z is in cm, we have set for w0=.1, ?=3.14*.01/zR in cm ( about 3 microns for zR =100)\n\ny = (z*0.1)/zR; % and for the asymptote\nyy = -y;\n\nw = 0.1*sqrt(1+(z/zR).^2); % and for the asymptote\nww = -0.1*sqrt(1+(z/zR).^2);\n\nsubplot(2,1,2);\nplot(z,w,z,ww,z,y,z,yy);\naxis([-100 100 -0.2 0.3]);                  % PLOTS LIMITS                    \nxlabel('z');\nlegend('w(z)','ww(z)','y(z)','yy(z)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "L10WRS Radius of curvature and Beam waist.",
    "tags": [
      "chapter7",
      "light-sources",
      "mirror"
    ],
    "wikipediaLinks": [
      {
        "title": "Mirror",
        "url": "https://en.wikipedia.org/wiki/Mirror"
      },
      {
        "title": "Light source",
        "url": "https://en.wikipedia.org/wiki/Light_source"
      },
      {
        "title": "Laser",
        "url": "https://en.wikipedia.org/wiki/Laser"
      }
    ]
  },
  {
    "id": "L11MOCONFCS",
    "title": "L11MOCONFCS - L11MOCONFCS\r",
    "description": "L11MOCONFCS\r",
    "category": "Optics - Light Sources",
    "chapter": "7",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# L11MOCONFCS\n\n# Cartesian Coordinates for rectangular mirrors in confocal resonator.\n# Field distribution as contour plot..\n\n# The mode numbers m and n are for Hermitian Polynomials.\n# The constant in the exponential is simulated by X.\n# Small X correspond to small \"waist width\".\n\n\nN = 40\nX = 100\nY = 100\ni = (0:1:N)\nj = (0:1:N)\nxi = (-20) + 1.00*i\nyj = (-20) + 1.00*j\nnx = length(i)\nny = length(j)\nfor r=1:nx\n       for k=1:ny\n            x = xi(r)\n            y = yj(k)\n            M00(r,k)  =(g(x,y)*H00(x,y))**2\n            M01(r,k)  =(g(x,y)*H01(x,y))**2\n            M02(r,k)  =(g(x,y)*H02(x,y))**2\n            M10(r,k)  =(g(x,y)*H10(x,y))**2\n            M11(r,k)  =(g(x,y)*H11(x,y))**2\n            M12(r,k)  =(g(x,y)*H12(x,y))**2\n            M20(r,k)  =(g(x,y)*H20(x,y))**2\n            M21(r,k)  =(g(x,y)*H21(x,y))**2\n            M22(r,k)  =(g(x,y)*H22(x,y))**2\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.contour(M00)\nplt.xlim(0, 40)\nplt.ylim(0, 40)\n\nplt.legend(['M00'])\n\nplt.subplot(2, 2, 2)\n\nplt.contour(M10)\nplt.xlim(0, 40)\nplt.ylim(0, 40)\n\nplt.legend(['M10'])\n\n\nplt.subplot(2, 2, 3)\n\nplt.contour(M01)\nplt.xlim(0, 40)\nplt.ylim(0, 40)\n\nplt.legend(['M01'])\n\nplt.subplot(2, 2, 4)\n\nplt.contour(M11)\nplt.xlim(0, 40)\nplt.ylim(0, 40)\n\nplt.legend(['M11'])\n\nfig = plt.figure(2)\n\nplt.subplot(3, 2, 1)\n\nplt.contour(M20)\nplt.xlim(0, 40)\nplt.ylim(0, 40)\n\nplt.legend(['M20'])\n\n\nplt.subplot(3, 2, 2)\n\nplt.contour(M21)\nplt.xlim(0, 40)\nplt.ylim(0, 40)\n\nplt.legend(['M21'])\n\nplt.subplot(3, 2, 3)\n\nplt.contour(M02)\nplt.xlim(0, 40)\nplt.ylim(0, 40)\n\nplt.legend(['M02'])\n\nplt.subplot(3, 2, 4)\n\nplt.contour(M12)\nplt.xlim(0, 40)\nplt.ylim(0, 40)\n\nplt.legend(['M12'])\n\nplt.subplot(3, 1, 3)\n\nplt.contour(M22)\nplt.xlim(0, 40)\nplt.ylim(0, 40)\n\nplt.legend(['M22'])\n\n\n\nOut = x**2+y**2\nOut = np.exp(-R(x,y)/X)\nOut = 1\nOut = 1\nOut = x*np.sqrt(2/X)\nOut = y*np.sqrt(2/Y)\nOut = 4*((np.sqrt(2/Y)*y)**2)-2\nOut =  4*((np.sqrt(2/X)*x)**2)-2\nOut = H0x(x)*H0y(y)\nOut = H0x(x)*H1y(y)\nOut = H0x(x)*H2y(y)\nOut = H1x(x)*H0y(y)\nOut = H1x(x)*H1y(y)\nOut = H1x(x)*H2y(y)\nOut = H2x(x)*H0y(y)\nOut = H2x(x)*H1y(y)\nOut = H2x(x)*H2y(y)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% L11MOCONFCS\n\n% Cartesian Coordinates for rectangular mirrors in confocal resonator.\n% Field distribution as contour plot..\n\n% The mode numbers m and n are for Hermitian Polynomials.\n% The constant in the exponential is simulated by X.\n% Small X correspond to small \"waist width\".\n\nfunction L11MOCONFCS;\nglobal X Y;\nN = 40;\nX = 100;\nY = 100;\ni = (0:1:N);\nj = (0:1:N);\n\nxi = (-20) + 1.00*i;\nyj = (-20) + 1.00*j;\nnx = length(i);\nny = length(j); \nfor r=1:nx;\n       for k=1:ny;\n            x = xi(r);\n            y = yj(k);\n            M00(r,k)  =(g(x,y).*H00(x,y)).^2;\n            M01(r,k)  =(g(x,y).*H01(x,y)).^2;\n            M02(r,k)  =(g(x,y).*H02(x,y)).^2;\n            M10(r,k)  =(g(x,y).*H10(x,y)).^2;\n            M11(r,k)  =(g(x,y).*H11(x,y)).^2;\n            M12(r,k)  =(g(x,y).*H12(x,y)).^2;\n            M20(r,k)  =(g(x,y).*H20(x,y)).^2;\n            M21(r,k)  =(g(x,y).*H21(x,y)).^2;\n            M22(r,k)  =(g(x,y).*H22(x,y)).^2;\n       end;\nend;\n\n\n\nfigure(1);\nsubplot(2,2,1);\ncontour(M00);\naxis([0 40 0 40]);  \nlegend('M00');\n\nsubplot(2,2,2);\ncontour(M10);\naxis([0 40 0 40]);  \nlegend('M10');\n\n\nsubplot(2,2,3);    \ncontour(M01);\naxis([0 40 0 40]);  \nlegend('M01');\n\nsubplot(2,2,4);      \ncontour(M11);\naxis([0 40 0 40]);  \nlegend('M11');\n\nfigure(2);         \nsubplot(3,2,1);\ncontour(M20);\naxis([0 40 0 40]);  \nlegend('M20');\n\n\nsubplot(3,2,2);\ncontour(M21);\naxis([0 40 0 40]);  \nlegend('M21');\n\nsubplot(3,2,3);      \ncontour(M02);\naxis([0 40 0 40]);  \nlegend('M02');\n\nsubplot(3,2,4);      \ncontour(M12);\naxis([0 40 0 40]);  \nlegend('M12');\n\nsubplot(3,1,3);      \ncontour(M22);\naxis([0 40 0 40]);  \nlegend('M22');\n\n\nfunction Out=R(x,y)\nOut = x.^2+y.^2;\n\nfunction Out=g(x,y)\nglobal X;\nOut = exp(-R(x,y)./X);\n\nfunction Out=H0x(x)\nOut = 1;\nfunction Out=H0y(y)\nOut = 1;\n\nfunction Out=H1x(x)\nglobal Y;\nOut = x.*sqrt(2/X);\n\nfunction Out=H1y(y)\nglobal Y;\nOut = y.*sqrt(2/Y);\n\nfunction Out=H2y(y)\nglobal Y;\nOut = 4*((sqrt(2/Y).*y).^2)-2;\n\nfunction Out=H2x(x)\nOut =  4*((sqrt(2/X).*x).^2)-2;\n\nfunction Out=H00(x,y)\nOut = H0x(x).*H0y(y);\n\nfunction Out=H01(x,y)\nOut = H0x(x).*H1y(y);\n\nfunction Out=H02(x,y)\nOut = H0x(x).*H2y(y);\n\nfunction Out=H10(x,y)\nOut = H1x(x).*H0y(y);\n\nfunction Out=H11(x,y)\nOut = H1x(x).*H1y(y);\n\nfunction Out=H12(x,y)\nOut = H1x(x).*H2y(y);\n\nfunction Out=H20(x,y)\nOut = H2x(x).*H0y(y);\n\nfunction Out=H21(x,y)\nOut = H2x(x).*H1y(y);\n\nfunction Out=H22(x,y)\nOut = H2x(x).*H2y(y);\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "L11MOCONFCS",
    "tags": [
      "chapter7",
      "light-sources",
      "mirror",
      "focal-length",
      "contour-plot"
    ],
    "wikipediaLinks": [
      {
        "title": "Mirror",
        "url": "https://en.wikipedia.org/wiki/Mirror"
      },
      {
        "title": "Focal length",
        "url": "https://en.wikipedia.org/wiki/Focal_length"
      },
      {
        "title": "Light source",
        "url": "https://en.wikipedia.org/wiki/Light_source"
      },
      {
        "title": "Laser",
        "url": "https://en.wikipedia.org/wiki/Laser"
      }
    ]
  },
  {
    "id": "L12MOCY1to4S",
    "title": "L12MOCY1to4S - L12MOCY1to4S\r",
    "description": "L12MOCY1to4S\r",
    "category": "Optics - Light Sources",
    "chapter": "7",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# L12MOCY1to4S\n# Cylindircal Coordinates for circular mirrors in confocal resonator.\n# Field distribution as contour plot for graph 00, 10, 01, and 11.\n# The L(l,p) functions are written out for 00 to 22. The constant in the exponential is\n# X\n\n\nX = 3\nN = 30\ni = (0:1:N)\nj = (0:1:N)\nxi = -3 + 0.20001*i\nyj = -3 + 0.20001*j\nnx = length(i)\nny = length(j)\nfor r=1:nx\n       for k=1:ny\n            x = xi(r)\n            y = yj(k)\n            M00(r,k)  =(np.cos(0*Beta(x,y))*q(x,y)*L00(x,y))**2\n            M10(r,k)  =(np.cos(0*Beta(x,y))*q(x,y)*L01(x,y))**2\n            M01(r,k)  =(np.cos(1*Beta(x,y))*q(x,y)*L10(x,y))**2\n            M11(r,k)  =(np.cos(1*Beta(x,y))*q(x,y)*L11(x,y))**2\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nMesh(M00)\naxis([0 30 0 30 0 1])\nplt.legend(['M00'])\n\nplt.subplot(2, 2, 2)\n\nMesh(M10)\naxis([0 30 0 30 0 1.5])\nplt.legend(['M10'])\n\nplt.subplot(2, 2, 3)\n\nMesh(M01)\naxis([0 30 0 30 0 1])\nplt.legend(['M01'])\n\nplt.subplot(2, 2, 4)\n\nMesh(M11)\naxis([0 30 0 30 0 3.5])\nplt.legend(['M11'])\n\n\nOut = x**2+y**2\nOut = atan(x/y)\nOut = np.exp(-R(x,y)/X)\nOut = 4*R(x,y)/X\nOut = np.cos(0*Beta(x,y))\nOut = 1\nOut = 1-u(x,y)\nOut = 1\nOut = 2-u(x,y)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% L12MOCY1to4S\n% Cylindircal Coordinates for circular mirrors in confocal resonator.\n% Field distribution as contour plot for graph 00, 10, 01, and 11.\n% The L(l,p) functions are written out for 00 to 22. The constant in the exponential is\n% X\n\nfunction L12MOCY1to4S;\nglobal X;\nX = 3;\nN = 30;\ni = (0:1:N);\nj = (0:1:N);\nxi = -3 + 0.20001*i;\nyj = -3 + 0.20001*j;\n\nnx = length(i);\nny = length(j); \nfor r=1:nx;\n       for k=1:ny;\n            x = xi(r);\n            y = yj(k);\n            M00(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L00(x,y)).^2;\n            M10(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L01(x,y)).^2;\n            M01(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L10(x,y)).^2;\n            M11(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L11(x,y)).^2;\n       end;\nend;\n\nfigure(1);         \nsubplot(2,2,1);\nMesh(M00);\naxis([0 30 0 30 0 1]); \nlegend('M00');\n\nsubplot(2,2,2);    \nMesh(M10);\naxis([0 30 0 30 0 1.5]); \nlegend('M10');\n\nsubplot(2,2,3);    \nMesh(M01);\naxis([0 30 0 30 0 1]); \nlegend('M01');\n\nsubplot(2,2,4);          \nMesh(M11);\naxis([0 30 0 30 0 3.5]); \nlegend('M11');\n\nfunction Out=R(x,y)\nOut = x^2+y^2;\n\nfunction Out=Beta(x,y)\nOut = atan(x/y);\n\nfunction Out=q(x,y)\nglobal X;\nOut = exp(-R(x,y)/X);\n\nfunction Out=u(x,y)\nglobal X;\nOut = 4*R(x,y)/X;\n\nfunction Out=g(x,y)\nOut = cos(0*Beta(x,y));\n\nfunction Out=L00(x,y)\nOut = 1;\n\nfunction Out=L01(x,y)\nOut = 1-u(x,y);\n\nfunction Out=L10(x,y)\nOut = 1;\n\nfunction Out=L11(x,y)\nOut = 2-u(x,y);\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "L12MOCY1to4S",
    "tags": [
      "chapter7",
      "light-sources",
      "mirror",
      "focal-length",
      "contour-plot",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Mirror",
        "url": "https://en.wikipedia.org/wiki/Mirror"
      },
      {
        "title": "Focal length",
        "url": "https://en.wikipedia.org/wiki/Focal_length"
      },
      {
        "title": "Light source",
        "url": "https://en.wikipedia.org/wiki/Light_source"
      },
      {
        "title": "Laser",
        "url": "https://en.wikipedia.org/wiki/Laser"
      }
    ]
  },
  {
    "id": "L12MOCY5to9S",
    "title": "L12MOCY5to9S - L12MOCY5to9S\r",
    "description": "L12MOCY5to9S\r",
    "category": "Optics - Light Sources",
    "chapter": "7",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# L12MOCY5to9S\n# Cylindircal Coordinates for circular mirrors in confocal resonator.\n# Field distribution as contour plot of 02 to 20.\n# The L(l,p) functions are written out for 00 to 22. The constant in the exponential is\n# X.\n\n\nX = 2\nN = 30\ni = (0:1:N)\nj = (0:1:N)\nxi = -4 + 0.30001*i\nyj = -4 + 0.30001*j\nnx = length(i)\nny = length(j)\nfor r=1:nx\n       for k=1:ny\n            x = xi(r)\n            y = yj(k)\n            M02(r,k)  =(np.cos(2*Beta(x,y))*q(x,y)*L20(x,y))**2\n            M20(r,k)  =(np.cos(0*Beta(x,y))*q(x,y)*L02(x,y))**2\n            M12(r,k)  =(np.cos(2*Beta(x,y))*q(x,y)*L21(x,y))**2\n            M21(r,k)  =(np.cos(1*Beta(x,y))*q(x,y)*L12(x,y))**2\n            M22(r,k)  =(np.cos(2*Beta(x,y))*q(x,y)*L22(x,y))**2\nfig = plt.figure(1)\n\nplt.subplot(3, 2, 1)\n\nMesh(M02)\naxis([0 30 0 30 0 0.6])\nplt.legend(['M02'])\n\nplt.subplot(3, 2, 2)\n\nMesh(M20)\naxis([0 30 0 30 0 6])\nplt.legend(['M20'])\n\nplt.subplot(3, 2, 3)\n\nMesh(M12)\naxis([0 30 0 30 0 5])\nplt.legend(['M12'])\n\nplt.subplot(3, 2, 4)\n\nMesh(M21)\naxis([0 30 0 30 0 5])\nplt.legend(['M21'])\n\nplt.subplot(3, 1, 3)\n\nMesh(M22)\naxis([0 30 0 30 0 15])\nplt.legend(['M22'])\n\n\nOut = x**2+y**2\nOut = atan(x/y)\nOut = np.exp(-R(x,y)/X)\nOut = 4*R(x,y)/X\nOut = np.cos(0*Beta(x,y))\nOut = 1-2*u(x,y)+(1/2)*u(x,y)**2\nOut = 3-3*u(x,y)+(1/2)*u(x,y)**2\nOut = 1\nOut = 3 - u(x,y)\nOut = 6-4*u(x,y)+(1/2)*u(x,y)**2\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% L12MOCY5to9S\n% Cylindircal Coordinates for circular mirrors in confocal resonator.\n% Field distribution as contour plot of 02 to 20.\n% The L(l,p) functions are written out for 00 to 22. The constant in the exponential is\n% X.\n\nfunction L12MOCY5to9S;\nglobal X;\nX = 2;\nN = 30;\ni = (0:1:N);\nj = (0:1:N);\n\nxi = -4 + 0.30001*i;\nyj = -4 + 0.30001*j;\n\nnx = length(i);\nny = length(j); \nfor r=1:nx;\n       for k=1:ny;\n            x = xi(r);\n            y = yj(k);\n            M02(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L20(x,y)).^2;\n            M20(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L02(x,y)).^2;\n            M12(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L21(x,y)).^2;\n            M21(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L12(x,y)).^2;\n            M22(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L22(x,y)).^2;\n       end;\nend;\n\nfigure(1);\nsubplot(3,2,1);\nMesh(M02);\naxis([0 30 0 30 0 0.6]); \nlegend('M02');\n\nsubplot(3,2,2);\nMesh(M20);\naxis([0 30 0 30 0 6]); \nlegend('M20');\n\nsubplot(3,2,3);      \nMesh(M12);\naxis([0 30 0 30 0 5]); \nlegend('M12');\n\nsubplot(3,2,4);      \nMesh(M21);\naxis([0 30 0 30 0 5]); \nlegend('M21');\n\nsubplot(3,1,3);         \nMesh(M22);\naxis([0 30 0 30 0 15]); \nlegend('M22');\n\nfunction Out=R(x,y)\nOut = x^2+y^2;\n\nfunction Out=Beta(x,y)\nOut = atan(x/y);\n\nfunction Out=q(x,y)\nglobal X;\nOut = exp(-R(x,y)/X);\n\nfunction Out=u(x,y)\nglobal X;\nOut = 4*R(x,y)/X;\n\nfunction Out=g(x,y)\nOut = cos(0*Beta(x,y));\n\nfunction Out=L02(x,y)\nOut = 1-2*u(x,y)+(1/2)*u(x,y)^2;\n\nfunction Out=L12(x,y)\nOut = 3-3*u(x,y)+(1/2)*u(x,y)^2;\n\nfunction Out=L20(x,y)\nOut = 1;\n\nfunction Out=L21(x,y)\nOut = 3 - u(x,y);\n\nfunction Out=L22(x,y)\nOut = 6-4*u(x,y)+(1/2)*u(x,y)^2;\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "L12MOCY5to9S",
    "tags": [
      "chapter7",
      "light-sources",
      "mirror",
      "focal-length",
      "contour-plot",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Mirror",
        "url": "https://en.wikipedia.org/wiki/Mirror"
      },
      {
        "title": "Focal length",
        "url": "https://en.wikipedia.org/wiki/Focal_length"
      },
      {
        "title": "Light source",
        "url": "https://en.wikipedia.org/wiki/Light_source"
      },
      {
        "title": "Laser",
        "url": "https://en.wikipedia.org/wiki/Laser"
      }
    ]
  },
  {
    "id": "LIRJEANS",
    "title": "LIRJEANS - L1RJEANS\r",
    "description": "L1RJEANS\r",
    "category": "Optics - Light Sources",
    "chapter": "7",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# L1RJEANS\n# The Raleigh Jeans law gives the emitted radiation as Energy/frequency interval\n# and per volume.It is given here as Ws/{(1/s)m**3}\n\n\nv = (5e14:-0.01e14:1e12)\nc = 3e8\nk = 1.38e-23\nT = 1000\ny = 8*np.pi*k*T*(v**2)/(c**3)\nfig = plt.figure(1)\n\nplt.plot(v,y)\n\nplt.xlim(0, 5e14)\nplt.ylim(0, 3e-15)\n;                  # PLOTS LIMITS                    \nplt.xlabel('v')\nplt.legend(['y(v)'])\n# Frequency\n# 1e11 is 3mm\n# 1e14 is 3micron\n# 1e17 is 3nm is 30A\n# 3e11 is 1mm   \n# 3e14 is 1micron\n# 3e17 is 1nm is 10A\n\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% L1RJEANS\n% The Raleigh Jeans law gives the emitted radiation as Energy/frequency interval\n% and per volume.It is given here as Ws/{(1/s)m^3}\n\nfunction LIRJEANS;\nv = (5e14:-0.01e14:1e12);\nc = 3e8;\nk = 1.38e-23\nT = 1000;\n\ny = 8*pi*k*T*(v.^2)/(c^3);\nfigure(1);\nplot(v,y);\naxis([0 5e14 0 3e-15]);                  % PLOTS LIMITS                    \nxlabel('v');\nlegend('y(v)');\n\n% Frequency\n% 1e11 is 3mm\n% 1e14 is 3micron\n% 1e17 is 3nm is 30A\n% 3e11 is 1mm   \n% 3e14 is 1micron\n% 3e17 is 1nm is 10A\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "L1RJEANS",
    "tags": [
      "chapter7",
      "light-sources",
      "frequency"
    ],
    "wikipediaLinks": [
      {
        "title": "Frequency",
        "url": "https://en.wikipedia.org/wiki/Frequency"
      },
      {
        "title": "Light source",
        "url": "https://en.wikipedia.org/wiki/Light_source"
      },
      {
        "title": "Laser",
        "url": "https://en.wikipedia.org/wiki/Laser"
      }
    ]
  },
  {
    "id": "L2BBLS",
    "title": "L2BBLS - L2BBLS\r",
    "description": "L2BBLS\r",
    "category": "Optics - Light Sources",
    "chapter": "7",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# L2BBLS\n# 1. Black body Radiation. Graph of f(x) =dL/d?, and x =?\n# 2. Integration over the wavelength range from 3*10**-6 to 3*10**-5 meters to obtain the\n# Radiance.\n# 3. Multiplication with area times solid angle to obtain the Radiant energy.\n\n# 1. Black body Radiation. Graph of dL/d????\n# Constants for wavelength dependence\n\nc2 = 1.43e-2\nc1 = 1.18e-16\nT = 1000\nx=(3e-5:-0.01e-5:1e-7); # x in meters\n# Planck's Law depending on wavelength\n\nfig = plt.figure(1)\n\nplt.plot(x,f(x)\n)\nplt.xlim(0, 3e-5)\nplt.ylim(0, 5e9)\n;                  # PLOTS LIMITS                    \nplt.xlabel('x')\nplt.legend(['f(x)'])\nR = quad(@f,3e-6,3e-5)\n# Radiance  R = 1.316e4\n\n# 3. Multiplication with area times solid angle to obtain the Radiant energy.\n# Area A, Solid angle SA\n\nA = 0.1\nSA = 4\nRR = A*SA*R  \n# RR = 5.263e3 Watts\n\n# RR has the same value as the corresponding value when integrating over frequency.\n\n\n\n\nOut = c1/((x**5)*(np.exp(c2/(x*T))-1))\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% L2BBLS\n% 1. Black body Radiation. Graph of f(x) =dL/d?, and x =?\n% 2. Integration over the wavelength range from 3*10^-6 to 3*10^-5 meters to obtain the\n% Radiance.\n% 3. Multiplication with area times solid angle to obtain the Radiant energy.\n\n% 1. Black body Radiation. Graph of dL/d????\n% Constants for wavelength dependence\nfunction L2BBLS;\nglobal c1 c2 T;\nc2 = 1.43e-2;\nc1 = 1.18e-16;\nT = 1000;\n\nx=(3e-5:-0.01e-5:1e-7); % x in meters\n% Planck's Law depending on wavelength\n\nfigure(1);\nplot(x,f(x));\naxis([0 3e-5 0 5e9]);                  % PLOTS LIMITS                    \nxlabel('x');\nlegend('f(x)');\n\nR = quad(@f,3e-6,3e-5)\n% Radiance  R = 1.316e4\n\n% 3. Multiplication with area times solid angle to obtain the Radiant energy.\n% Area A, Solid angle SA\n\nA = 0.1;\nSA = 4;\n\nRR = A*SA*R  \n% RR = 5.263e3 Watts\n\n% RR has the same value as the corresponding value when integrating over frequency.\n\n\nfunction Out = f(x) \nglobal c1 c2 T;\nOut = c1./((x.^5).*(exp(c2./(x*T))-1));",
    "cCode": "",
    "defaultParams": {},
    "displayName": "L2BBLS",
    "tags": [
      "chapter7",
      "light-sources",
      "grating",
      "wavelength",
      "frequency"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction grating",
        "url": "https://en.wikipedia.org/wiki/Diffraction_grating"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Frequency",
        "url": "https://en.wikipedia.org/wiki/Frequency"
      },
      {
        "title": "Light source",
        "url": "https://en.wikipedia.org/wiki/Light_source"
      },
      {
        "title": "Laser",
        "url": "https://en.wikipedia.org/wiki/Laser"
      }
    ]
  },
  {
    "id": "L3BBFS",
    "title": "L3BBFS - L3BBFS\r",
    "description": "L3BBFS\r",
    "category": "Optics - Light Sources",
    "chapter": "7",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# L3BBFS\n\n# 1. Black body Radiation. Graph of f(?) = dL/d?, ? is frequency\n# 2. Integration over the wavelength range from 10**14 to 3*10**13 1/s to obtain the\n# Radiance.\n# 3. Multiplication with area times solid angle to obtain the Radiant energy.\n\n# Constants for frequency dependence\n\n\nc4 = 4.78e-11\nc3 = 1.47e-50\nT = 1000\nv=(5e14:-0.01e14:1e12)\n# Planck's Law depending on frequency\n\nfig = plt.figure(1)\n\nplt.plot(v,f(v)\n)\nplt.xlim(0, 5e14)\nplt.ylim(0, 2e-10)\n;                  # PLOTS LIMITS                    \nplt.xlabel('v')\nplt.legend(['f(v)'])\nR = quad(@f,1e13,1e14)\n# Radiance  R = 1.316e4 Watts\n\n# 3. Multiplication with area times solid angle to obtain the Radiant energy.\n# Area A, Solid angle SA\n\nA = 0.1\nSA = 4\nRR = A*SA*R  \n# RR = 5.263e3 Watts\n\n# RR has the same value as the corresponding value when integrating over wavelength.\n\n\nOut = (c3/(np.exp(c4*v/T)-1))*(v**3)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% L3BBFS\n\n% 1. Black body Radiation. Graph of f(?) = dL/d?, ? is frequency\n% 2. Integration over the wavelength range from 10^14 to 3*10^13 1/s to obtain the\n% Radiance.\n% 3. Multiplication with area times solid angle to obtain the Radiant energy.\n\n% Constants for frequency dependence\n\nfunction L3BBFS;\nglobal c3 c4 T;\nc4 = 4.78e-11;\nc3 = 1.47e-50;\nT = 1000;\n\nv=(5e14:-0.01e14:1e12);\n% Planck's Law depending on frequency\n\nfigure(1);\nplot(v,f(v));\naxis([0 5e14 0 2e-10]);                  % PLOTS LIMITS                    \nxlabel('v');\nlegend('f(v)');\n\nR = quad(@f,1e13,1e14)\n% Radiance  R = 1.316e4 Watts\n\n% 3. Multiplication with area times solid angle to obtain the Radiant energy.\n% Area A, Solid angle SA\n\nA = 0.1;\nSA = 4;\n\nRR = A*SA*R  \n% RR = 5.263e3 Watts\n\n% RR has the same value as the corresponding value when integrating over wavelength.\nfunction Out = f(v) \nglobal c3 c4 T;\nOut = (c3./(exp(c4*v/T)-1)).*(v.^3);",
    "cCode": "",
    "defaultParams": {},
    "displayName": "L3BBFS",
    "tags": [
      "chapter7",
      "light-sources",
      "grating",
      "wavelength",
      "frequency"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction grating",
        "url": "https://en.wikipedia.org/wiki/Diffraction_grating"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Frequency",
        "url": "https://en.wikipedia.org/wiki/Frequency"
      },
      {
        "title": "Light source",
        "url": "https://en.wikipedia.org/wiki/Light_source"
      },
      {
        "title": "Laser",
        "url": "https://en.wikipedia.org/wiki/Laser"
      }
    ]
  },
  {
    "id": "L4STEFS",
    "title": "L4STEFS - L4STEFS\r",
    "description": "L4STEFS\r",
    "category": "Optics - Light Sources",
    "chapter": "7",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# L4STEFS\n\n# The Stefan Boltzmann Law. The units are Power/area in Watt/m**2\n# A linear and a logarithmic scale are used.\n\nh = 6.626e-34\nc = 3e8\nk = 1.38e-23\nT = np.arange(10, 10000+10, 10)\nSigma = (2/15)*(( (np.pi**5)*(k**4))/((c**2)*(h**3)))\n# Sigma = 5.652e-8 kgs-3K-4\nyT = Sigma*(T**4)\n# Linear y-scale\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(T,yT)\n\nplt.xlim(0, 1e4)\nplt.ylim(0, 6e8)\n;                  # PLOTS LIMITS                    \nplt.xlabel('T')\nplt.title('Linear y-scale')\nplt.legend(['y(T)'])\n# Logarithmic y-scale\nplt.subplot(2, 1, 2)\n\nsemilogy(T,yT)\nplt.xlim(0, 1e4)\nplt.ylim(1e-4, 1e9)\n;                  # PLOTS LIMITS                    \nplt.xlabel('T')\nplt.title('Logarithmic y-scale')\nplt.legend(['y(T)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% L4STEFS\n\n% The Stefan Boltzmann Law. The units are Power/area in Watt/m^2\n% A linear and a logarithmic scale are used.\nfunction L4STEFS;\nh = 6.626e-34;\nc = 3e8;\nk = 1.38e-23;\nT = (10:10:10000);\nSigma = (2/15)*(( (pi^5)*(k^4))/((c^2)*(h^3)))\n% Sigma = 5.652e-8 kgs-3K-4\nyT = Sigma*(T.^4);\n\n% Linear y-scale\nfigure(1);\nsubplot(2,1,1);\nplot(T,yT);\naxis([0 1e4 0 6e8]);                  % PLOTS LIMITS                    \nxlabel('T');\ntitle('Linear y-scale');\nlegend('y(T)');\n\n% Logarithmic y-scale\nsubplot(2,1,2);\nsemilogy(T,yT);\naxis([0 1e4 1e-4 1e9]);                  % PLOTS LIMITS                    \nxlabel('T');\ntitle('Logarithmic y-scale');\nlegend('y(T)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "L4STEFS",
    "tags": [
      "chapter7",
      "light-sources"
    ],
    "wikipediaLinks": [
      {
        "title": "Light source",
        "url": "https://en.wikipedia.org/wiki/Light_source"
      },
      {
        "title": "Laser",
        "url": "https://en.wikipedia.org/wiki/Laser"
      }
    ]
  },
  {
    "id": "L5WIENS",
    "title": "L5WIENS - L5WienS\r",
    "description": "L5WienS\r",
    "category": "Optics - Light Sources",
    "chapter": "7",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# L5WienS\n# Wien's displacement Law\n# Graphs of Wien's displacement Law T = 0 to 8000\n\n# Temperature in Kelvin\n# Wavelength in meter\n\nT = np.arange(100, 8000+1, 1)\nLamda = (1/T)*2.89e-6\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nsemilogy(T,Lamda)\nplt.xlim(0, 8000)\nplt.ylim(1e-10, 1e-7)\n;                  # PLOTS LIMITS                    \nplt.xlabel('T')\nplt.legend(['lambda(T)'])\n# Graphs of Wien's displacement Law T = 0 to 500\nTT = np.arange(10, 500+1, 1)\nLamdaLamda = (1/TT)*2.89e-6\nplt.subplot(2, 1, 2)\n\nsemilogy(TT,LamdaLamda)\nplt.xlim(0, 500)\nplt.ylim(1e-9, 1e-6)\n;                  # PLOTS LIMITS                    \nplt.xlabel('T')\nplt.legend(['lambdalambda(TT)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% L5WienS\n% Wien's displacement Law\n% Graphs of Wien's displacement Law T = 0 to 8000\n\n% Temperature in Kelvin\n% Wavelength in meter\nfunction L5WIENS;\nT = (100:1:8000);\nLamda = (1./T)*2.89e-6;\n\nfigure(1);\nsubplot(2,1,1);\nsemilogy(T,Lamda);\naxis([0 8000 1e-10 1e-7]);                  % PLOTS LIMITS                    \nxlabel('T');\nlegend('lambda(T)');\n\n% Graphs of Wien's displacement Law T = 0 to 500\nTT = (10:1:500);\nLamdaLamda = (1./TT)*2.89e-6;\n\nsubplot(2,1,2);\nsemilogy(TT,LamdaLamda);\naxis([0 500 1e-9 1e-6]);                  % PLOTS LIMITS                    \nxlabel('T');\nlegend('lambdalambda(TT)');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "L5WienS",
    "tags": [
      "chapter7",
      "light-sources",
      "wavelength"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Light source",
        "url": "https://en.wikipedia.org/wiki/Light_source"
      },
      {
        "title": "Laser",
        "url": "https://en.wikipedia.org/wiki/Laser"
      }
    ]
  },
  {
    "id": "L6BANDS",
    "title": "L6BANDS - L6BANDS\r",
    "description": "L6BANDS\r",
    "category": "Optics - Light Sources",
    "chapter": "7",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# L6BANDS\n# Lorentian Line shape\n\n# Frequency interval\nm=11\nOmega0 = 49/(2**m-1)\nOmegaStep = 1/(2**m-1)\nOmega = (OmegaStep:OmegaStep:1)\nTau = 1000\ng1 = 2*((1/(2*Tau))/((1/((2*Tau)**2))+(Omega-Omega0)**2))\nQ = Tau*Omega0\n# Q = 23.937\n\nfig = plt.figure(1)\n\nplt.plot(Omega,g1)\n\nplt.xlim(0, 0.04)\nplt.ylim(0, 4000)\n;                  # PLOTS LIMITS                    \nplt.xlabel('omega')\nplt.legend(['g1(omega)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% L6BANDS\n% Lorentian Line shape\nfunction L6BANDS;\n% Frequency interval\nm=11;\n\nOmega0 = 49/(2^m-1);\n\nOmegaStep = 1/(2^m-1);\nOmega = (OmegaStep:OmegaStep:1);\nTau = 1000;\n\ng1 = 2*((1/(2*Tau))./((1/((2*Tau)^2))+(Omega-Omega0).^2));\nQ = Tau*Omega0\n% Q = 23.937\n\nfigure(1);\nplot(Omega,g1);\naxis([0 0.04 0 4000]);                  % PLOTS LIMITS                    \nxlabel('omega');\nlegend('g1(omega)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "L6BANDS",
    "tags": [
      "chapter7",
      "light-sources",
      "frequency"
    ],
    "wikipediaLinks": [
      {
        "title": "Frequency",
        "url": "https://en.wikipedia.org/wiki/Frequency"
      },
      {
        "title": "Light source",
        "url": "https://en.wikipedia.org/wiki/Light_source"
      },
      {
        "title": "Laser",
        "url": "https://en.wikipedia.org/wiki/Laser"
      }
    ]
  }
];
