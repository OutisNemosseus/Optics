// Optics - Other - Chapter 6
// 5 programs

export const programs = [
  {
    "id": "N1RECBOX",
    "title": "N1RECBOX - N1RECBOX\r",
    "description": "N1RECBOX\r",
    "category": "Optics - Other",
    "chapter": "6",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\nfrom mpl_toolkits.mplot3d import Axes3D\n\n# N1RECBOX\n# Modes of the rectangular box in two dimensions \n# Standing sine waves in x and y direction. Mode number and constants.\n# x direction n1 and a\n# y direction n2 and b\n# The wave in each direction is shown and Contour and surface plots.\n# The square is also shown as surface plot.\n\nN = 20\na = 40\nb = 40\nn1 = 2\nn2 = 2\nLamda1 = 2 * a /n1\nLamda2 = 2 * b /n2\ni =(0:1:N)\nj =(0:1:N)\nx = (-40) + 2.001*i\ny = (-40) + 2.0001*j\ny1 = np.sin(2*np.pi*x/Lamda1)\ny2 = np.sin(2*np.pi*y/Lamda2)\n# 1. One Dimension\nfig = plt.figure(1)\n\nplt.subplot(1, 2, 1)\n\nplt.plot(x,y1)\n\nplt.xlim(-40, 20)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('Xi')\nplt.legend(['y1(x)'])\nplt.subplot(1, 2, 2)\n\nplt.plot(y,y2)\n\nplt.xlim(-40, 20)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('Yj')\nplt.legend(['y2(y)'])\n# 2. Amplitude, 2D\nnx = length(x)\nny = length(y)\nZ = zeros(nx,ny)\nfor r=1:nx\n        for c=1:ny\n            M11(r,c)= y1(r)*y2(c)\n            MM11(r,c)= (y1(r)*y2(c))**2\nfig = plt.figure(2)\n\nplt.subplot(2, 2, 1)\n\nplt.contour(M11)\nplt.xlim(0, 20)\nplt.ylim(0, 20)\n\nplt.subplot(2, 2, 2)\n\nax = plt.gca()\nif not hasattr(ax, 'plot_surface'):\n    fig = plt.figure()\n    ax = fig.add_subplot(111, projection='3d')\n    X, Y = np.meshgrid(np.arange(M11.shape[1]), np.arange(M11.shape[0]))\n    ax.plot_surface(X, Y, M11, cmap='viridis')\naxis([0 20 0 20 -1 1])\n\n# 3. Intensity, 2D\n\nplt.subplot(2, 2, 3)\n\nplt.contour(MM11)\nplt.xlim(0, 20)\nplt.ylim(0, 20)\n\nplt.subplot(2, 2, 4)\n\nax = plt.gca()\nif not hasattr(ax, 'plot_surface'):\n    fig = plt.figure()\n    ax = fig.add_subplot(111, projection='3d')\n    X, Y = np.meshgrid(np.arange(MM11.shape[1]), np.arange(MM11.shape[0]))\n    ax.plot_surface(X, Y, MM11, cmap='viridis')\naxis([0 20 0 20 0 1])\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% N1RECBOX\n% Modes of the rectangular box in two dimensions \n% Standing sine waves in x and y direction. Mode number and constants.\n% x direction n1 and a\n% y direction n2 and b\n% The wave in each direction is shown and Contour and surface plots.\n% The square is also shown as surface plot.\nfunction N1RECBOX;\nN = 20;\na = 40;\nb = 40;\nn1 = 2;\nn2 = 2;\n\nLamda1 = 2 * a /n1;\nLamda2 = 2 * b /n2;\n\ni =(0:1:N); \nj =(0:1:N);\n\nx = (-40) + 2.001*i;\ny = (-40) + 2.0001*j;\n\ny1 = sin(2*pi*x/Lamda1);\ny2 = sin(2*pi*y/Lamda2);\n\n% 1. One Dimension\nfigure(1);\nsubplot(1,2,1);\nplot(x,y1);\naxis([-40 20 -1 1]);                  % PLOTS LIMITS                    \nxlabel('Xi');\nlegend('y1(x)');\n\nsubplot(1,2,2);\nplot(y,y2);\naxis([-40 20 -1 1]);                  % PLOTS LIMITS                    \nxlabel('Yj');\nlegend('y2(y)');\n\n% 2. Amplitude, 2D\nnx = length(x);\nny = length(y);\nZ = zeros(nx,ny);\nfor r=1:nx;\n        for c=1:ny;\n            M11(r,c)= y1(r)*y2(c);\n            MM11(r,c)= (y1(r)*y2(c))^2;\n        end;\nend;\n\nfigure(2);\nsubplot(2,2,1);\n              \ncontour(M11);\naxis([0 20 0 20]);  \n\n\n\nsubplot(2,2,2);\nmesh(M11);\naxis([0 20 0 20 -1 1])\n\n% 3. Intensity, 2D\n\nsubplot(2,2,3);              \ncontour(MM11);\naxis([0 20 0 20]);  \n\nsubplot(2,2,4);\nmesh(MM11);\naxis([0 20 0 20 0 1])\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "N1RECBOX",
    "tags": [
      "chapter6",
      "intensity",
      "amplitude",
      "contour-plot",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Intensity (physics)",
        "url": "https://en.wikipedia.org/wiki/Intensity_(physics)"
      },
      {
        "title": "Amplitude",
        "url": "https://en.wikipedia.org/wiki/Amplitude"
      }
    ]
  },
  {
    "id": "N4SYMULANTb",
    "title": "N4SYMULANTb - N4SYMULANTb Page 2 \r",
    "description": "N4SYMULANTb Page 2 \r",
    "category": "Optics - Other",
    "chapter": "6",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# N4SYMULANTb Page 2 \n# Numerical calculation\n\nn1 = 1\nn2 = 1.5\nn3 = 2\n# i = np.sqrt(-1)\n# for a single interface, that is\nM11= 1\nM12 = 0\nM21 = 0\nM22 = 1\ntt = (-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))* conj(-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))\n# tt = 0.444\nR = ((-(-n3*M12*n1-M22*n1+M21+n3*M11))/(M21+M22*n1+n3*M11+n3*M12*n1))**2\n# R = 0.111\n# One sees that R+TT is not 1 and tt is not the transmitted power\n# However if n3*tt is the transmitted power T, one has:\nT = n3*tt\n# T=0.889\n# T+R = 1\n# and if n1 is not 1 we have more generally to write:\nT = (n3/n1)*tt\n# For antireflection coating one has eq. 6.27\nnn1 = 1\nnn2 = np.arange(1.1, 2+0.01, 0.01)\nnn3 = 1.5\nMM12 = (-i)/nn2\nMM21 = (-i)*nn2\nr = ((-(-n3*MM12*n1+MM21))/(MM21+n3*MM12*n1))\n# since -i cancels out we have\nMM12 = 1/nn2\nMM21 = nn2\nR = ((-(-nn3*MM12*nn1+MM21))/(MM21+nn3*MM12*nn1))**2\nfig = plt.figure(1)\n\nplt.plot(nn2,R)\n\nplt.xlim(1, 1.5)\nplt.ylim(0, 0.1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('nn2')\nplt.legend(['R(nn2)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% N4SYMULANTb Page 2 \n% Numerical calculation\nfunction N4SYMULANTb;\nn1 = 1;\nn2 = 1.5;\nn3 = 2;\n% i = sqrt(-1);\n% for a single interface, that is\nM11= 1;\nM12 = 0;\nM21 = 0;\nM22 = 1;\n\ntt = (-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))* conj(-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))\n% tt = 0.444;\n\nR = ((-(-n3*M12*n1-M22*n1+M21+n3*M11))/(M21+M22*n1+n3*M11+n3*M12*n1))^2;\n% R = 0.111;\n\n% One sees that R+TT is not 1 and tt is not the transmitted power\n% However if n3*tt is the transmitted power T, one has\nT = n3*tt;\n% T=0.889\n% T+R = 1;\n% and if n1 is not 1 we have more generally to write\nT = (n3/n1)*tt;\n% For antireflection coating one has eq. 6.27\nnn1 = 1;\nnn2 = (1.1:0.01:2);\nnn3 = 1.5;\nMM12 = (-i)./nn2;\nMM21 = (-i).*nn2;\n\nr = ((-(-n3*MM12*n1+MM21))/(MM21+n3*MM12*n1));\n\n\n\n\n% since -i cancels out we have\nMM12 = 1./nn2;\nMM21 = nn2;\n\nR = ((-(-nn3*MM12*nn1+MM21))./(MM21+nn3*MM12*nn1)).^2;\nfigure(1);\nplot(nn2,R);\naxis([1 1.5 0 0.1]);                  % PLOTS LIMITS                    \nxlabel('nn2');\nlegend('R(nn2)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "N4SYMULANTb Page 2",
    "tags": [
      "chapter6",
      "reflection"
    ],
    "wikipediaLinks": [
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      }
    ]
  },
  {
    "id": "N6PLSPS",
    "title": "N6PLSPS - N6PLSPS\r",
    "description": "N6PLSPS\r",
    "category": "Optics - Other",
    "chapter": "6",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# N6PLSPS\n# Wave traveling with total internal reflection through a planar waveguide.\n# Resonance condition of s-polarization.\n# Global definition of n1, n2, n3, d and ? above the graph\n\n\nn1 = 1.5\nn2 = 1\nn3 = 1\nd = 18\nLamda = 2\nTheta = np.arange(0, 90+1, 1)\ny = 2*np.pi*n1*(d/Lamda)*np.cos(2*np.pi*Theta/360)\nzs1 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n2**2))/(n1*np.cos(2*np.pi*Theta/360))\nys1 = -atan(zs1)\nzs3 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n3**2))/(n1*np.cos(2*np.pi*Theta/360))\nys3 = -atan(zs3)\n# ys is for m=1, yys for m=2, yyys for m=3\n# For these parameters the angle\n# Theta of the first three possible modes is determined\n\nys = -ys1 -ys3 + np.pi\nyys = -ys1 -ys3 + np.pi*2\nyyys = -ys1 -ys3 + np.pi*3\n# Global Definition\nThetac = asin(n2/n1)\nThetaThetac = 360*Thetac/(2*np.pi)\n# ThetaThetac = 41.81\n\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(Theta,y,Theta,ys,Theta,yys,Theta,yyys)\n\nplt.xlim(0, 90)\nplt.ylim(0, 15)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['y(\theta)', 'ys(\theta)', 'yys(\theta)', 'yyys(\theta)'])\n# At the cross-over point of y with ys, yys, or yyys respectively, the resonance condition is\n# fulfilled.\n# The functions ys, yys and yyys are complex in the region from horizontal appearance to\n# zero. This is shown in the next graph where the argument is plotted. The complex region\n# has to be disregarded for the determination of the cross-over point.\n\nplt.subplot(2, 1, 2)\n\nplt.plot(Theta,angle(ys)\n,Theta,angle(yys),Theta,angle(yyys))\nplt.xlim(0, 100)\nplt.ylim(0, 0.6)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['angle(ys(\theta))', 'angle(yys(\theta))', 'angle(yyys(\theta))'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% N6PLSPS\n% Wave traveling with total internal reflection through a planar waveguide.\n% Resonance condition of s-polarization.\n% Global definition of n1, n2, n3, d and ? above the graph\n\nfunction N6PLSPS;\nn1 = 1.5;\nn2 = 1;\nn3 = 1;\nd = 18;\nLamda = 2;\nTheta = (0:1:90);\ny = 2*pi*n1*(d/Lamda)*cos(2*pi*Theta/360);\nzs1 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n2^2))./(n1*cos(2*pi*Theta/360));\nys1 = -atan(zs1);\nzs3 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n3^2))./(n1*cos(2*pi*Theta/360));\nys3 = -atan(zs3);\n\n% ys is for m=1, yys for m=2, yyys for m=3\n% For these parameters the angle\n% Theta of the first three possible modes is determined\n\nys = -ys1 -ys3 + pi;\nyys = -ys1 -ys3 + pi*2;\nyyys = -ys1 -ys3 + pi*3;\n\n%Global Definition\nThetac = asin(n2/n1);\nThetaThetac = 360*Thetac/(2*pi)\n% ThetaThetac = 41.81\n\nfigure(1);\nsubplot(2,1,1);\nplot(Theta,y,Theta,ys,Theta,yys,Theta,yyys);\naxis([0 90 0 15]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('y(\theta)','ys(\theta)','yys(\theta)','yyys(\theta)');\n\n\n% At the cross-over point of y with ys, yys, or yyys respectively, the resonance condition is\n% fulfilled.\n% The functions ys, yys and yyys are complex in the region from horizontal appearance to\n% zero. This is shown in the next graph where the argument is plotted. The complex region\n% has to be disregarded for the determination of the cross-over point.\n\nsubplot(2,1,2);\nplot(Theta,angle(ys),Theta,angle(yys),Theta,angle(yyys));\naxis([0 100 0 0.6]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('angle(ys(\theta))','angle(yys(\theta))','angle(yyys(\theta))');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "N6PLSPS",
    "tags": [
      "chapter6",
      "reflection",
      "polarization"
    ],
    "wikipediaLinks": [
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Polarization (waves)",
        "url": "https://en.wikipedia.org/wiki/Polarization_(waves)"
      }
    ]
  },
  {
    "id": "N7PLPPS",
    "title": "N7PLPPS - N7PLPPS\r",
    "description": "N7PLPPS\r",
    "category": "Optics - Other",
    "chapter": "6",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# N7PLPPS\n# Wave traveling with total internal reflection through a planar waveguide.\n# Resonance condition for p-polarization.\n# global definition of n1,n2,n3, d and ? above the graph\n\nn1 = 1.5\nn2 = 1\nn3 = 1\nd = 6\nLamda = 4.3\nLamdaLamda = Lamda/n1\n# LamdaLamda = 2.867\n\nTheta = np.arange(0, 90+1, 1)\ny = 2*np.pi*n1*(d/Lamda)*np.cos(2*np.pi*Theta/360)\nzp1 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n2**2)*n1)/((n2**2)*np.cos(2*np.pi*Theta/360))\nyp1 = -atan(zp1)\nzp3 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n3**2)*n1)/((n3**2)*np.cos(2*np.pi*Theta/360))\nyp3 = -atan(zp3)\n# For the graph we use yp for m=1, yyp for m=2, yyyp for m=3\n\nyp = -yp1 -yp3 + np.pi\nyyp = -yp1 -yp3 + np.pi*2\nyyyp = -yp1 -yp3 + np.pi*3\n# Global Definition\nThetac = asin(n2/n1)\nThetaThetac = 360*Thetac/(2*np.pi)\n# ThetaThetac = 41.81\n\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(Theta,y,Theta,yp,Theta,yyp,Theta,yyyp)\n\nplt.xlim(0, 90)\nplt.ylim(0, 15)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['y(\theta)', 'yp(\theta)', 'yyp(\theta)', 'yyyp(\theta)'])\n# At the cross-over point of y with yp, yyp, or yyyp respectively, the resonance condition is\n# fulfilled.\n# The functions yp, yyp and yyyp are complex in the region from horizontal appearance to\n# zero. This is shown in the next graph where the argument is plotted. The complex region\n# has to be disregarded for the determination of the cross-over point.\n\nplt.subplot(2, 1, 2)\n\nplt.plot(Theta,angle(yp)\n,Theta,angle(yyp),Theta,angle(yyyp))\nplt.xlim(0, 100)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['angle(yp(\theta))', 'angle(yyp(\theta))', 'angle(yyyp(\theta))'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% N7PLPPS\n% Wave traveling with total internal reflection through a planar waveguide.\n% Resonance condition for p-polarization.\n% global definition of n1,n2,n3, d and ? above the graph\nfunction N7PLPPS;\n\nn1 = 1.5;\nn2 = 1;\nn3 = 1;\nd = 6;\nLamda = 4.3;\nLamdaLamda = Lamda/n1\n% LamdaLamda = 2.867\n\nTheta = (0:1:90);\ny = 2*pi*n1*(d/Lamda)*cos(2*pi*Theta/360);\nzp1 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n2^2)*n1)./((n2^2)*cos(2*pi*Theta/360));\nyp1 = -atan(zp1);\nzp3 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n3^2)*n1)./((n3^2)*cos(2*pi*Theta/360));\nyp3 = -atan(zp3);\n\n% For the graph we use yp for m=1, yyp for m=2, yyyp for m=3\n\nyp = -yp1 -yp3 + pi;\nyyp = -yp1 -yp3 + pi*2;\nyyyp = -yp1 -yp3 + pi*3;\n\n%Global Definition\nThetac = asin(n2/n1);\nThetaThetac = 360*Thetac/(2*pi)\n% ThetaThetac = 41.81\n\nfigure(1);\nsubplot(2,1,1);\nplot(Theta,y,Theta,yp,Theta,yyp,Theta,yyyp);\naxis([0 90 0 15]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('y(\theta)','yp(\theta)','yyp(\theta)','yyyp(\theta)');\n\n% At the cross-over point of y with yp, yyp, or yyyp respectively, the resonance condition is\n% fulfilled.\n% The functions yp, yyp and yyyp are complex in the region from horizontal appearance to\n% zero. This is shown in the next graph where the argument is plotted. The complex region\n% has to be disregarded for the determination of the cross-over point.\n\nsubplot(2,1,2);\nplot(Theta,angle(yp),Theta,angle(yyp),Theta,angle(yyyp));\naxis([0 100 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('angle(yp(\theta))','angle(yyp(\theta))','angle(yyyp(\theta))');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "N7PLPPS",
    "tags": [
      "chapter6",
      "reflection",
      "polarization"
    ],
    "wikipediaLinks": [
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Polarization (waves)",
        "url": "https://en.wikipedia.org/wiki/Polarization_(waves)"
      }
    ]
  },
  {
    "id": "N8CWGK",
    "title": "N8CWGK - N8CWGK\r",
    "description": "N8CWGK\r",
    "category": "Optics - Other",
    "chapter": "6",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# N8CWGK\n# Dielectric circular waveguide, determination of k\n# 1. Check for positive values of argument for J0, J1 and K0, K1\n\n# Input Data: radius, wavelength and refractive\n# indices\na = 3\nLamda = 2.39\nn1 = 1.5\nno =1\n# We try the interval \nk = np.arange(2.65, 3.8+0.01, 0.01)\n# Since x = (?a)**2 and y= (?a)**2\n# We have for the square of the arguments of the Bessel functions\nxx = (a**2)*(((n1**2)*4*np.pi**2)/(Lamda**2)-k**2)\nyy = (a**2)*(k**2-((no**2)*4*np.pi**2)/(Lamda**2))\nx = np.sqrt(xx)\ny = np.sqrt(yy)\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(k,x,k,y)\n\nplt.xlim(2.6, 3.8)\nplt.ylim(0, 20)\n;                  # PLOTS LIMITS                    \nplt.xlabel('k')\nplt.legend(['x(k)', 'y(k)'])\nplt.subplot(2, 1, 2)\n\nplt.plot(k,-besselj(1,x)\n/(x*besselj(0,x)),k,besselk(1,y)/(y*besselk(0,y)))\nplt.xlim(2.6, 3.8)\nplt.ylim(-40, 10)\n;                  # PLOTS LIMITS                    \nplt.xlabel('k')\nplt.legend(['-besselj(1,x)/(x*besselj(0,x))', 'besselk(1,y)/(y*besselk(0,y))'])\n# From graph: First intersection\nkk = 2.66\nLamdaLamda = (2*np.pi)/kk\n# LamdaLamda = 2.362\n# Side calculation. If\nLamdaLamdaLamda = 8\n# we get\nkkk = 2*np.pi/LamdaLamdaLamda\n# and kkk = 0.785\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% N8CWGK\n% Dielectric circular waveguide, determination of k\n% 1. Check for positive values of argument for J0, J1 and K0, K1\nfunction N8CWGK;\n%Input Data: radius, wavelength and refractive\n% indices\na = 3;\nLamda = 2.39;\nn1 = 1.5;\nno =1;\n\n\n% We try the interval \nk = (2.65:0.01:3.8);\n\n\n% Since x = (?a)^2 and y= (?a)^2\n% We have for the square of the arguments of the Bessel functions\nxx = (a^2)*(((n1^2)*4*pi^2)/(Lamda^2)-k.^2);\nyy = (a^2)*(k.^2-((no^2)*4*pi^2)/(Lamda^2));\n\nx = sqrt(xx);\ny = sqrt(yy);\n\nfigure(1);\nsubplot(2,1,1);\nplot(k,x,k,y);\naxis([2.6 3.8 0 20]);                  % PLOTS LIMITS                    \nxlabel('k');\nlegend('x(k)','y(k)');\n\nsubplot(2,1,2);\nplot(k,-besselj(1,x)./(x.*besselj(0,x)),k,besselk(1,y)./(y.*besselk(0,y)));\naxis([2.6 3.8 -40 10]);                  % PLOTS LIMITS                    \nxlabel('k');\nlegend('-besselj(1,x)/(x*besselj(0,x))','besselk(1,y)/(y*besselk(0,y))');\n\n\n% From graph: First intersection\nkk = 2.66;\nLamdaLamda = (2*pi)/kk\n% LamdaLamda = 2.362;\n\n% Side calculation. If\nLamdaLamdaLamda = 8;\n% we get\nkkk = 2*pi/LamdaLamdaLamda\n% and kkk = 0.785\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "N8CWGK",
    "tags": [
      "chapter6",
      "wavelength"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      }
    ]
  }
];
